import {souMsapiActionType,handleFindshowActionType,handleChildValActionType,
    souMsapixuanActionType,handleFindValActionType,handlerClickIdActionType
} from "./actionType"
import {souMsapi,souMsapixuan,souMsapiId} from "../api/movie"

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
// // 异步souMsapixuanAsyncAction
// export const souMsapixuanAction=(val,category_id)=>({
//     type:souMsapixuanActionType,
//     value:val,
//     category_id
// })
// export const souMsapixuanAsyncAction=()=>{
//     return async(dispatch)=>{
//         let data=await souMsapixuan()
//         dispatch(souMsapixuanAction(data))
        
//     }
// }

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

