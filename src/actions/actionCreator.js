import {souMsapiActionType,handleFindshowActionType,handleChildValActionType,
    handleFindValActionType,handlerClickIdActionType,dianpusyncActionType,
    handleDianpuNavActionType,handledianpuDataActionType,
    handleDianfilterActionType,handleCilchfiterindexActionType,handlershoppingActionType,
    clickshoppingDelActionType,clickshoppingAddActionType
} from "./actionType"
import {souMsapi,souMsapixuan,souMsapiId,dianpu,gloupApiItems,storeApi,storedApi,storedGdApi} from "../api/movie"
import {createAction} from "redux-actions";
import {
        storeType,
        storedType,
        handlerJType,
        handlerAType,
        handlerSaveType,
        handlerGwcType,
        handlerSelectType,
        handlerInputType,
        handlerUpdateType,
        handlerDelType
    } from './actionTypes';
// 异步souMsapiAction
export const souMsapiAction=(val)=>({
    type:souMsapiActionType,
    value:val
})
export const souMsapiAsyncAction=()=>{
    return async(dispatch)=>{
        let data=await souMsapi()
        dispatch(souMsapiAction(data))
    }
}

export const handleFindshowAction=(index)=>({
    type:handleFindshowActionType,
    index
})

export const handleChildValAction=(index1)=>({
    type:handleChildValActionType,
    index1
})


export const handleFindValAction=(index,data)=>({
    type:handleFindValActionType,
    index,
    data
})
export const handleChildsncValAction=(index,item)=>{
    return async(dispatch)=>{
        let data = await souMsapixuan(item, 1, "get")
        dispatch(handleFindValAction(index,data))
    }
}

export const handlerClickIdAction=(index,itemid,original_image,itemtype,jumei_price,market_price,data)=>({
    type:handlerClickIdActionType,
    index,
    itemid,
    original_image,
    itemtype,
    jumei_price,
    market_price,
    data
})
export const handlerClicksyncIdAction=(index,itemid,original_image,itemtype,jumei_price,market_price)=>{
    return async (dispatch)=>{
        let data=await souMsapiId(itemid,itemtype)
        dispatch(handlerClickIdAction(index,itemid,original_image,itemtype,jumei_price,market_price,data))
    }
}
// // 异步dianpusyncAction//店铺接口
export const dianpuAction=(data)=>({
    type:dianpusyncActionType,
    data
})
export const dianpusyncAction=()=>{
    return async(dispatch)=>{
        
        let data=await dianpu()
        // console.log(dianpusort,1111)
        dispatch(dianpuAction(data))
    }
}
//店铺接口2
export const handleDianpuNavAction=(index,data1,dianpusort)=>({
    type:handleDianpuNavActionType,
    data1,
    index,
    dianpusort

})
export const handleDianpusyncNavAction=(index,dianpusort)=>{
    return async(dispatch)=>{
        let data1=await dianpu(dianpusort)
        dispatch(handleDianpuNavAction(index,data1,dianpusort))
    }
}
//筛选
export const handleDianfilterAction=(index)=>({
    type:handleDianfilterActionType,
    index
})
export const handleCilchfiterindexAction=(index1)=>({
    type:handleCilchfiterindexActionType,
    index1
})


export const handledianpuDataAction=(index,short_name,image_url,jumei_price,market_price)=>({
    type:handledianpuDataActionType,
    index,
    short_name,
    image_url,
    jumei_price,
    market_price
})

//购物车
export const handlershoppingAction=(short_name)=>({
    type:handlershoppingActionType,
    short_name
})
//shopping  NUM--
export const clickshoppingDelAction=(index)=>({
    type:clickshoppingDelActionType,
    index
})
// NUM++
export const clickshoppingAddAction=(index)=>({
    type:clickshoppingAddActionType,
    index
})






export const selectedAction=createAction("SELECTEC_TYPE");
//详情页
export const itemsAction = createAction("ITEMS_TYPE",(val)=>val);
export const itemsAsyncAction = (id,type)=>{
    return async (dispatch)=>{
        let data = await gloupApiItems(id,type);
        dispatch(itemsAction(data))
    }
}
//旗舰店 综合
export const storeAction = createAction(storeType,(val)=>val);
export const storeAsyncAction = (ids)=>{
    return async (dispatch)=>{
        let data = await storeApi(ids);
        dispatch(storeAction(data))
    }
}
//小-大
export const storedAction = createAction(storedType,(val)=>val);
export const storedAsyncAction = (ids)=>{
    return async (dispatch)=>{
        let data = await storedApi(ids);
        dispatch(storedAction(data))
    }
}
//大-小
export const handerZhAction = createAction("STOREZH_TYPE",(val)=>val);
export const handerZhAsyncAction = (ids)=>{
    return async (dispatch)=>{
        let data = await storedGdApi(ids);
        dispatch(handerZhAction(data))
    }
}
//购物车button
export const handlerJAction=(index)=>({
    type:handlerJType,
    index:index
})
export const handlerAAction=(index)=>({
    type:handlerAType,
    index:index
})
export const handlerSaveAction=(name,price,img,id)=>({
    type:handlerSaveType,
    name,
    price,
    img,
    id
})

export const handlerToGwcAction=(name,price,img,id)=>({
    type:handlerGwcType,
    name,
    price,
    img,
    id
})

export const handlerSelectAction={
    type:handlerSelectType
}
export const handlerInputAction=(index)=>({
    type:handlerInputType,
    index:index
})
export const handlerUpdateAction={
    type:handlerUpdateType
}
export const handlerDelAction=(index)=>({
    type:handlerDelType,
    index:index
})