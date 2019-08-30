import {souMsapiActionType,handleFindshowActionType,handleChildValActionType,
    souMsapixuanActionType,handleFindValActionType,handlerClickIdActionType
} from "./actionType"
import {souMsapi,souMsapixuan,souMsapiId,gloupApiItems,storeApi,storedApi,storedGdApi} from "../api/movie"
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