/*
 * auth true 登录才能访问，false不需要登录，默认true
 * */

export default [{
        path: '/home',
        component: resolve => require(["../pages/home/"], resolve),
        meta: {
            auth: false,
            keepAlive: true
        },
    },
    {
        path: '/user',
        component: resolve => require(["../pages/user/"], resolve),
        meta: {
            auth: false,
            keepAlive: true
        },
        children: [
            {
                path: 'coupon',
                component: resolve => require(["../pages/user/coupon.vue"], resolve),
                meta: {
                    auth: false,
                    keepAlive: true
                },
            },
            {
                path: 'set',
                component: resolve => require(["../pages/user/set.vue"], resolve),
                meta: {
                    auth: false,
                    keepAlive: true
                },
            }
        ],
        redirect:'/user/coupon'
    },
    {
        path: '*',
        meta: {
            auth: false
        },
        redirect: '/home'
    },
    {
        path: '',
        meta: {
            auth: false
        },
        redirect: '/home'
    },

]