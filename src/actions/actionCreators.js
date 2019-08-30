import {homeIndexNowType,homeIndexPreType,homeSearchType,
    detailPageType,shopAllGoodsPage,shopFilterType}from './actionTypes'
import {HomePageListApi,HomePagePreApi,searchApi,detailApi,
    detailDynamicApi,shopAllGoodsApi} from '../api/home_api/home_api'
// 上新
export const homeIndexNowAction=(val)=>({
    type:homeIndexNowType,
    value:val
})
export const homeIndexAsyncNowAction=()=>{
    return async (dispatch)=>{
        let data=await HomePageListApi()
        dispatch(homeIndexNowAction(data))
    }
}
// 即将上新
export const homeIndexPreAction=(val)=>({
    type:homeIndexPreType,
    value:val
})
export const homeIndexAsyncPreAction=(page_key)=>{
    return async (dispatch)=>{
        let data=await HomePagePreApi(page_key)
        dispatch(homeIndexPreAction(data))
    }
}
// 搜索
export const homeSearchAction=(val)=>({
    type:homeSearchType,
    value:val
})
export const homeSearchAsyncPreAction=(keyword)=>{
    return async (dispatch)=>{
        let data=await searchApi(keyword)
        dispatch(homeSearchAction(data))
    }
}

// 详情
export const detailAction=(val,dataTwo)=>(
    {
    type:detailPageType,
    value:val,
    desc:dataTwo
})
export const detailAsyncPreAction=(item_id,type)=>{
    return async (dispatch)=>{
        let data=await detailApi(item_id,type)
        let dataTwo=await detailDynamicApi(item_id,type)
        
        dispatch(detailAction(data,dataTwo))
    }
}

//店铺全部商品
export const shopAllGoodsAction=(val)=>(
    {
    type:shopAllGoodsPage,
    value:val,
})
export const shopAllGoodsAsyncAction=(goods,page)=>{
    return async (dispatch)=>{
        if(goods || page){
            let data=await shopAllGoodsApi(page)
            if(data.data.data.rows){
                for(var i=0;i<goods.length;i++){
                data.data.data.rows.push(goods[i])
            }
            dispatch(shopAllGoodsAction(data))    
            }            
        }
        else{
            let data=await shopAllGoodsApi()
            dispatch(shopAllGoodsAction(data))
        }
    }
}