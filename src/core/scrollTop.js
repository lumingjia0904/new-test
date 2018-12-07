var back = null;
//滚动条高度
function scrollEvent(){
    // var key = localStorage.getItem('key');
    // 滚动时获取页面滚动条的位置
    var sTop =document.body.scrollTop || document.documentElement.scrollTop;
    // 滚动条的位置保存到本地存储里面
    // localStorage.setItem(key, sTop);
};

var scrollTop = {
    getScrollTop(backObj){
        window.scrollTo(0,backObj.top || 0);
        // if(document.body.scrollTop || document.body.scrollTop === 0){
        //     document.body.scrollTop = localStorage.getItem(key) || 0;
        // } else {
        //     document.documentElement.scrollTop = localStorage.getItem(key) || 0;
        // }
    },
    setScrollTop(backObj){
        back = backObj;
        window.addEventListener('scroll', scrollEvent, false);
    },
    scrollTopDestroyed(){
        back = null;
        window.removeEventListener('scroll',scrollEvent, false);
    }
};
export default  scrollTop;
