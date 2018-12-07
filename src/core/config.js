
var wx = {
    appid:'wx55e4758db1069f1d',         //更改此处时，别忘了更改share.js里的文件
    // redict_url:'http://api.duoshoubang.com/dist/order/pay',              //线上支付
    // redict_url:'http://api.waptest.duoshoubang.com/dist/order/pay',         //测试支付
    redict_url:'',
    redict_url_login:'',
    redict_url_extra:'',
    payAppid:'wx460e2141cf67d9f4'
}
if(location.origin.indexOf('http://test.waptest.duoshoubang.com') == -1 && location.host.indexOf("localhost") == -1) {
    wx.redict_url = 'http://api.duoshoubang.com/dist/order/pay';        //线上支付
    wx.redict_url_extra = 'http://api.duoshoubang.com/dist/order/extrapay';        //线上额外支付
    wx.redict_url_login = 'http://api.duoshoubang.com/api/dsb/login/redirect.html?redirectUrl=';  //线上登录
} else {
    wx.redict_url = 'http://api.waptest.duoshoubang.com/dist/order/pay';        //测试
    wx.redict_url_extra = 'http://api.waptest.duoshoubang.com/dist/order/extrapay';        //测试
    wx.redict_url_login = 'http://api.waptest.duoshoubang.com/api/dsb/login/redirect.html?redirectUrl=';  //
}


export default{
    wx:wx,
}