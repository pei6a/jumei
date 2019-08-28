import {
    Search
} from "@pages/category"

export const tabBarRoute = [
    

]

export const noTabBarRoute = [
  
    {
        path:"/search/:category_id/:page",
        component:Search,
        meta:{
            flag:false
        },
        name:"查找列表",
    }
]



export const routeConfig = tabBarRoute.concat(noTabBarRoute)
