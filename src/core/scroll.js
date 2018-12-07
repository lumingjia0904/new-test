


function setScroll(scroll, pullDown,topNum){    //topNum第三个是初始值
    var top = topNum>=0 ? topNum : (window.dVue.$store.state.scrollTop[scroll.title] || 0);

    var blank = document.documentElement || document.body;
    var bodyHeight = blank.clientHeight;

    if(document.documentElement) {
        document.documentElement.scrollTop = top;
    } else if(document.body) {
        document.body.scrollTop = top;
    }
    var set = setTimeout(() => {
        window.onscroll = () => {
            var scrollTop;
            if(document.documentElement && document.documentElement.scrollTop) {
                scrollTop=document.documentElement.scrollTop;
            } else if(document.body) {
                scrollTop=document.body.scrollTop;
            }
            var t = scrollTop;
            window.dVue.$store.commit('setScrollTop', {'key': scroll.title, 'top': t});

            var sumHeight = document.getElementById('app').clientHeight;
            if(t > bodyHeight + 5) {
                scroll.backTop = true;
            } else {
                scroll.backTop = false;
            }
            if(sumHeight - bodyHeight - t < 5){
                pullDown();
            }
        };
        clearTimeout(set);
        set = null;
    },500);
};

function clearScroll(scroll){
    if(document.documentElement&&document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
    } else if(document.body) {
        document.body.scrollTop = 0;
    }
    window.dVue.$store.commit('setScrollTop', {'key': scroll.title, 'top': 0});
    scroll.backTop = false;
};

function closeScroll(){
    window.onscroll = null;
};

function up(scroll) {
    if(document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
    } else if(document.body) {
        document.body.scrollTop = 0;
    }
    // localStorage.setItem(scroll.title,0);
    window.dVue.$store.commit('setScrollTop', {'key': scroll.title, 'top': 0});
    scroll.backTop = false;
}




export default {
    setScroll:setScroll,
    closeScroll:closeScroll,
    up:up,
    clearScroll:clearScroll
};