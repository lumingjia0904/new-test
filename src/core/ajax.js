const HOST = '';
import apiUrlList from "./api.js";
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})
//promise 请求封装
var request = (url, data) => {
    return new Promise(function (resolve, reject) {
        var method = 'post';

        if (data.method) {
            method = data.method;
            delete data.method;
        }
        axios[method](url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
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
                var action = HOST + configApi;

                return request(action, arguments[0]);
            }
        })(configApi);
    })
})
export default api;