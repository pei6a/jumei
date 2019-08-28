import { HomePage, Tuan, Cart, My,Login,Detail,Shop,Search,Seach,FindId,Find } from "@pages"
export const tabBarRoute = [
    {
        path: '/home',
        component: HomePage,
        meta: {
            flag: true
        },
        name: '首页',
        icon: '\ue6a5'
    },
    {
        path: '/tuan',
        component: Tuan,
        meta: {
            flag: true
        },
        name: '拼团',
        icon: '\ue7ed'
    },    
    {
        path: '/cart',
        component: Cart,
        meta: {
            flag: false
        },
        name: '购物车',
        icon: '\ue673'
    },
    {
        path: '/my',
        component: My,
        meta: {
            flag: true,
            auth:true
        },
        name: '我的',
        icon: '\ue624'
    },
]
export const noTabBarRoute=[
    {
        path: '/login',
        component: Login,
        meta: {
            flag: false,
        },
        name: '登录',
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            flag: false,
        },
        name: '详情页',
    },
    {
        path: '/shop',
        component: Shop,
        meta: {
            flag: false,
        },
        name: '店铺',
    },
    {
        path: '/search',
        component: Search,
        meta: {
            flag: false,
        },
        name: '搜索页',
    },
    {
        path: "/find",
        component: Find,
        meta: {
            flag: false,
        },
        name: '搜素页',

    },
    {
        path: "/seach/:category_id",
        component: Seach,
        meta: {
            flag: false,
        },
        name: '分类',

    },
    {
        path: "/product/:item_id/:type",
        component: FindId,
        meta: {
            flag: false,
        },
        name: '详情',

    }
]
export const routeConfig=tabBarRoute.concat(noTabBarRoute)
