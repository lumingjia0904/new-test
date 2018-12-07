/**
 * Created by a56832357 on 17/10/13.
 */


var imgPreview = (current,pics) =>{
    if (window.WeixinJSBridge) {
        // 微信浏览器预览图片
        var WeixinJSBridge = window.WeixinJSBridge || {
                invoke: function () {
                },
                call: function () {
                }
            };
        WeixinJSBridge.invoke("imagePreview", {current: current, urls: pics});
    } else {
//        index = pics.indexOf(current);
//        imageView().init(pics, index);
    }
};



export default  imgPreview;