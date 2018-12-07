import BScroll from 'better-scroll';

function init(scrollDom){
    var rScroll = {
        scroll:''
    }
    var set = setTimeout(()=>{
        rScroll.scroll = new BScroll(scrollDom, {
            click: true,
            startX: 0,          //开始的x轴位置
            startY: 0,          //开始的y轴位置
            scrollY: true,
            momentum: true,     //是否开启拖动惯性
            //                    bounce: true,       //是否启用弹力动画效果，关掉可以加速
        })
        clearTimeout(set);
        set = null;
    },10);
    return rScroll;
}

function initX(scrollDom){
    var rScroll = {
        scroll:''
    }
    var set = setTimeout(()=>{
        rScroll.scroll = new BScroll(scrollDom, {
            click: true,
            startX: 0,          //开始的x轴位置
            startY: 0,          //开始的y轴位置
            scrollX: true,
            scrollY: false,
            // momentum: false,     //是否开启拖动惯性
            //                    bounce: true,       //是否启用弹力动画效果，关掉可以加速
        })
        clearTimeout(set);
        set = null;
    },10);
    return rScroll;
}

function initY(scrollDom){
    var rScroll = {
        scroll:''
    }
    var set = setTimeout(()=>{
        rScroll.scroll = new BScroll(scrollDom, {
            click: true,
            startX: 0,          //开始的x轴位置
            startY: 0,          //开始的y轴位置
            scrollY: true,
            scrollX: false,
            momentum: false,     //是否开启拖动惯性
            //                    bounce: true,       //是否启用弹力动画效果，关掉可以加速
        })
        clearTimeout(set);
        set = null;
    },10);
    return rScroll;
}


var betterScroll = {
    init:init,
    initX:initX,
    initY:initY,
    BScroll: BScroll
};
export default  betterScroll;
