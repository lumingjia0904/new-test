import toast from "./toast.js";
import util from "./util.js";
import core from "core";

var share = (option) => {
    var link = location.href;
    var o = {
        // title: '', // 分享标题
        title: document.title + '！海量好货抢购，完全停不下来！', // 分享标题
        desc: '原来国外这么便宜！一键海淘，海量好货，官网直发100%正品保障！', // 分享描述
        // link: location.href, // 分享链接
        link: link, // 分享链接
        // imgUrl:'http://img.duoshoubang.com/f5472de2a269507b05fcf4afb85439ce.jpg', // 分享图标
        imgUrl:document.getElementById('link1').href, // 分享图标
        type: '',
        dataUrl: '',
        success: function () {
        },
        cancel: function () {
            toast("已取消分享")
        }
    };
    var appMessage = {}
    util.extend(o,option);
    util.extend(appMessage,o);
    appMessage.title = option.testContent || (option.title || o.title);
    if(window.browser.v.weixin){
        wx.ready(function(){
            wx.onMenuShareAppMessage(o);        //分享给朋友
            wx.onMenuShareTimeline(appMessage);  //分享到朋友圈
            wx.onMenuShareQQ(o);                //分享到QQ
            wx.onMenuShareWeibo(o);             //分享到腾讯微博
            wx.onMenuShareQZone(o);             //分享到QQ空间
        });
    }

};
var defaultShare = () =>{
    var link = location.href;
    var o = {
        title: document.title + '！海量好货抢购，完全停不下来！', // 分享标题
        desc: '原来国外这么便宜！一键海淘，海量好货，官网直发100%正品保障！', // 分享描述
        // link: location.href, // 分享链接
        link: link, // 分享链接
        // imgUrl:'http://img.duoshoubang.com/f5472de2a269507b05fcf4afb85439ce.jpg', // 分享图标
        imgUrl:document.getElementById('link1').href, // 分享图标
        type: '',
        dataUrl: '',
        success: function () {

        },
        cancel: function () {
            toast("已取消分享")
        }
    };
    if(window.browser.v.weixin){
        wx.ready(function(){
            wx.onMenuShareAppMessage(o);        //分享给朋友
            wx.onMenuShareTimeline(o);          //分享到朋友圈
            wx.onMenuShareQQ(o);                //分享到QQ
            wx.onMenuShareWeibo(o);             //分享到腾讯微博
            wx.onMenuShareQZone(o);             //分享到QQ空间
        });
    }
};

var registerShare = (option) => {
    // 微信分享
    if(window.browser.v.weixin) {
        core.api.login.h5({
            'url': location.href,
            'platform' : 'dsbWx',
        }).then((data) => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                // appId: 'wxd509a103fe92c8b8', // 必填，公众号的唯一标识  微信公众平台appid
                appId: core.config.wx.appid, // 必填，公众号的唯一标识  微信服务号appid
                timestamp: data.model.p2, // 必填，生成签名的时间戳
                nonceStr: data.model.p1, // 必填，生成签名的随机串
                signature: data.model.p3,// 必填，签名，见附录1
                jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.error(function(res){
                // alert(JSON.stringify(res));
                // toast(JSON.stringify(res));
            });

            share(option);

        }).catch((err) => {

        });
    } else {

    }
}


export default  {
    share: share,
    defaultShare: defaultShare,
    registerShare: registerShare
};
