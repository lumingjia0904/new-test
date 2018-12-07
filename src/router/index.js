import App from "../app.vue";
/*
* auth true 登录才能访问，false不需要登录，默认true
* */

export default [
    {
        path: '/',
        component: App,
        meta: { auth: false ,keepAlive: true},
        children: [
            {
                path: '/home',
                meta: { auth: false ,keepAlive: true},
                component: resolve => require(["../pages/home/"], resolve )
            },
            {
                path: '*', //其他页面
                meta: { auth: false},
                redirect: '/home'
            },
            {
                path: '',
                meta: { auth: false},
                redirect: '/home'
            }
        ]
    }
]