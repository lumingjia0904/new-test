import ajax from "./ajax.js";
import apiUrlList from "./api.js";
import util from "./util.js";
import cookie from "./cookIe.js";
import loading from "./loading.js";
import toast from "./toast.js";
import scrollTop from "./scrollTop.js";
import is from "is";
import betterScroll from "./betterScroll.js";
import scroll from "./scroll.js";
import browser from "./browser.js";
import time from "./time.js";
import share from "./share.js";
import config from "./config.js";
import imgPreview from "./imgPreview.js";
ajax.beforeEach((res, next) => {
    //res.url = 'http://localhost:7777' + res.url;
    if (cookie.getCookie() && cookie.getCookie().token) {
        res.data.token = cookie.getCookie().token;
    }

    if (res.url.substring(0, 4) != 'http') {
        // res.url = location.protocol + '//' + location.host + '/api' + res.url; //线上

        if (location.host.indexOf("localhost") == -1 && location.host.indexOf("10.10.1.21") == -1) {
            res.url = location.protocol + '//' + location.host + '/api' + res.url; //线上
        } else {
            res.url = 'http://f9452cec.duoshoubang.com/api' + res.url; //远程接口22
        }
    }

    //其他信息处理内容区域

    //-----------------
    next();
})

ajax.afterEach((res, next) => {
    if (res) {
        next();
    } else {
        loading.hideLoading();
        exports.default.toast('加载失败')
        next();
    }
});

function _filter(str) {
    str += '' //隐式转换
    str = str.replace(/%/g, '%25')
    str = str.replace(/\+/g, '%2B')
    str = str.replace(/ /g, '%20')
    str = str.replace(/\//g, '%2F')
    str = str.replace(/\?/g, '%3F')
    str = str.replace(/&/g, '%26')
    str = str.replace(/\=/g, '%3D')
    str = str.replace(/#/g, '%23')
    return str
}

var _ajax = {
    defaultSetting: {
        url: window.location,
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function () {

        },
        error: function () {

        }
    },
    send: function (option) {
        option = Object.assign(this.defaultSetting, option);
        var query = [];
        var xhr = new XMLHttpRequest();
        for (var key in option.data) {
            query.push(key + "=" + _filter(option.data[key]));
        }
        if (option.type.toUpperCase() == "GET") {
            xhr.open("GET", option.url + "?" + query.join("&"), true);
            xhr.send();
        } else {
            xhr.open(setting.type, setting.url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(query.join('&'))
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    option.success(JSON.parse(xhr.responseText));
                } else {
                    option.error();
                }
            }
        }
    }
}

//post 请求封装
var post = (url, data = {}, success = () => {}, error = () => {}, method = 'POST', head = {}) => {
    ajax({
        url,
        data,
        success,
        error,
        type: method,
        head
    })
};


//promise 请求封装
var pPost = (url, data) => {
    return new Promise(function (resolve, reject) {
        loading.apiShowLoading();
        var method = 'POST';
        if (data.method) {
            method = data.method;
            delete data.method;
        }
        post(url, data,
            (res) => {
                loading.apiHideLoading();

                if (res.code == 'success') {
                    resolve(res);
                } else if (res.code == "ERR_TOKEN_EXPIRED") {
                    toast('token过期，请重新登录');
                    window.dVue.$store.commit('USER_SIGNOUT'); //清除本地本地个人信息缓存
                    cookie.deleteCookie('token'); //删除本地cookie
                    var set = setTimeout(() => {
                        window.dVue.$router.push('/user/login');
                        clearTimeout(set);
                        set = null;
                    })
                } else if (res.code == "ERR_PAGE_NOT_FOUND") {
                    toast(res.message);
                    window.dVue.$router.push('/noFound');
                } else {
                    toast(res.message);
                    // console.log("???");
                    reject(res);
                }
            },
            (error) => {
                loading.apiHideLoading();
                // window.dVue.$router.push('/404');
                toast('接口出错'); //网络不好还是服务器错误，后期再做区分
                reject('接口出错');
            },
            method);
    })
};
//请求封装
var api = {};
Object.keys(apiUrlList.apiUrlList).forEach((itemFirst) => {
    api[itemFirst] = {};
    Object.keys(apiUrlList.apiUrlList[itemFirst]).forEach((item) => {
        var configApi = apiUrlList.apiUrlList[itemFirst][item];
        api[itemFirst][item] = (function (configApi) {
            return function () {
                var action = configApi;

                return pPost(action, arguments[0]);
            }
        })(configApi);
    })
})


export default {
    get(url, data = {}, success = () => {}, error = () => {}, head = {}) {
        ajax({
            url,
            data,
            success,
            error,
            type: 'GET'
        }, head)
    },
    post: post,
    api: api,
    toast: toast,
    loading: loading,
    operateCookie: cookie,
    util: util,
    scrollTop: scrollTop,
    is: is, //判断是否是对象
    cookie: cookie,
    // _ajax:_ajax
    betterScroll: betterScroll,
    scroll: scroll,
    browser: browser,
    time: time,
    share: share,
    config: config,
    imgPreview: imgPreview
}