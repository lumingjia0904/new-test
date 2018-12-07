// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router';
import components from './components/'; //加载公共组件
import routes from './router/';
import core from "./core";
Vue.config.productionTip = false

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
  Vue.component(`l${name}`, components[key])
});
Vue.use(VueRouter);
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/',
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
router.beforeEach(({meta, path}, from, next) => {
  // console.log('跳转前')
  next();
});

router.afterEach(({meta, path}, from) => {
  // console.log('跳转后')
});