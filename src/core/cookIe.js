function getCookie(){
    var cookie = {};
    var all = document.cookie;
    if( all == "" ){
        return null;
    }
    // console.log(all,'all');
    var list = all.split(";");
    for( var i = 0; i < list.length; i++ ){
        var cok = list[i];
        var p = cok.indexOf("=");
        var name = cok.substring( 0,p ).trim();
        var value = cok.substring(p+1);
        value = decodeURIComponent( value );
        cookie[ name ] = value;
    }
    return cookie;
}
function setCookie(name,value,dayToLive){
    var cookie = name + "=" + encodeURIComponent( value );
    if( typeof dayToLive === "number"){
        cookie += "; max-age=" + ( dayToLive * 60 * 60 * 24 );
    }
    cookie += ";path=/";
    document.cookie = cookie;
}
function deleteCookie( name ){
    var domain = location.host;
    var cookie = name + "=" + ";max-age=0;path=/";
    document.cookie = cookie;
    var cookie = name + "=" + ";max-age=0;path=/;domain=."+domain;  //去除qq登录后，token里的domain前的地址有一个点
    document.cookie = cookie;
}






export default {
    getCookie: getCookie,
    setCookie: setCookie,
    deleteCookie: deleteCookie
}