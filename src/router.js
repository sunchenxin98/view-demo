
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['./views/login.vue'], resolve); }
};

export const regRouter = {
    path: '/register',
    name: 'register',
    meta: {
        title: '注册'
    },
    component: resolve => { require(['./views/register.vue'], resolve); }
};
export const page404 = {
    path: '/*',
    name: 'error_404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['./views/error_page/404.vue'], resolve); }
};

export const page401 = {
    path: '/401',
    meta: {
        title: '401-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['./views/error_page/401.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['./views/error_page/500.vue'], resolve); }
};


// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path:'/index',
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {
                path:'new',
                component: (resolve) => require(['./views/main_components/new.vue'], resolve)
            },
            {
                path: 'new2',
                component: (resolve) => require(['./views/main_components/new2.vue'], resolve)
            },
            {
                path:'new3',
                component: (resolve) => require(['./views/main_components/new3.vue'], resolve)
            },
            {
                path:'new4',
                component: (resolve) => require(['./views/main_components/new4.vue'], resolve)
            }
        ]
    }
]

//export default routers;
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    regRouter,
    ...appRouter,
    page500,
    page401,
    page404
];