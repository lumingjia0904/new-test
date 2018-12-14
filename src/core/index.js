import api from "./ajax.js";
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

export default {
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