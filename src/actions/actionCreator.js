import {souMsapiActionType,handleFindshowActionType,handleChildValActionType,
    handleFindValActionType,handlerClickIdActionType,dianpusyncActionType,
    handleDianpuNavActionType,handledianpuDataActionType,
    handleDianfilterActionType,handleCilchfiterindexActionType,handlershoppingActionType,
    clickshoppingDelActionType,clickshoppingAddActionType
} from "./actionType"
import {souMsapi,souMsapixuan,souMsapiId,gloupApiItems,dianpu} from "../api/movie"
import {createAction} from "redux-actions";

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
        // console.log(data,112111)
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

export const itemsAction = createAction("ITEMS_TYPE",(val)=>val);

//异步的action  gwcAsyncAction
export const itemsAsyncAction = (id,type)=>{
    return async (dispatch)=>{
        let data = await gloupApiItems(id,type);
        dispatch(itemsAction(data))
    }
}

export const gwcAction = createAction("GWC_TYPE",(val)=>val);

//异步的action
export const gwcAsyncAction = (name,price,img)=>{
    return async (dispatch)=>{
        let data = await gloupApiItems(name,price,img);
        console.log(data,333)
        dispatch(gwcAction(data))
    }
}
