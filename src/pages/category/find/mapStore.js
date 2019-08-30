import {handleFindshowAction,handleChildValAction,handleChildsncValAction,handlerClicksyncIdAction,
    handleDianpusyncNavAction,handledianpuDataAction,dianpusyncAction,
    handleDianfilterAction,handleCilchfiterindexAction,handlershoppingAction,
    clickshoppingDelAction,clickshoppingAddAction
} from "../../../actions/actionCreator"
export const mapStateToProps=(state)=>({
    page:state.sou.page,
    souMsapiList:state.sou.souMsapiList,
    color:state.sou.color,
    findflag:state.sou.findflag,
    findindex:state.sou.findindex,
    findpagelist:state.sou.findpagelist,
    category_id:state.sou.category_id,
    category_data:state.sou.category_data,

    findIdindex:state.sou.findIdindex,
    findid:state.sou.findid,
    findType:state.sou.findType,
    findjumei_price:state.sou.findjumei_price,
    findmarket_price:state.sou.findmarket_price,
    finddata:state.sou.finddata,
    original_image:state.sou.original_image,

    dianpunav:state.sou.dianpunav,
    dianpunavnum:state.sou.dianpunavnum,
    dianpudate:state.sou.dianpudate,
    dianpusort:state.sou.dianpusort,
    filterindex:state.sou.filterindex,
    xuanfilter:state.sou.xuanfilter,
    filterindex1:state.sou.filterindex1,
    arr:state.sou.arr,
    arr1:state.sou.arr1,
    shoppingNum:state.sou.shoppingNum,
    num:state.sou.num,
    price:state.sou.price,
    shoppingshow:state.sou.shoppingshow

    // xuanfilter_category:state.sou.xuanfilter_category,
    // xuanfilter_function:state.sou.xuanfilter_function,
    // xuanfilter_pre_brand:state.sou.xuanfilter_pre_brand,
    // xuanfilter_price:state.sou.xuanfilter_price



})

export const mapDispatchToProps=(dispatch)=>({
    handleFindshow(index){
        dispatch(handleFindshowAction(index))
    },
    handleChildVal(index1){
        dispatch(handleChildValAction(index1))
    },
    handleFindcatgory(index,item){
        dispatch(handleChildsncValAction(index,item))
    },
    handlerClickId(index,itemid,original_image,type,jumei_price,market_price){
        dispatch(handlerClicksyncIdAction(index,itemid,original_image,type,jumei_price,market_price))
    },
    handleDianpuNav(index,dianpusort){
        dispatch(handleDianpusyncNavAction(index,dianpusort))
    },
    handledianpuData(index,short_name,image_url,jumei_price,market_price){
        dispatch(handledianpuDataAction(index,short_name,image_url,jumei_price,market_price))
    },
    dianpusHandledata(dianpusort){
        dispatch(dianpusyncAction(dianpusort))
    },
    handleDianfilter(index){
        dispatch(handleDianfilterAction(index))
    },
    handleCilchfiterindex(index1){
        dispatch(handleCilchfiterindexAction(index1))
    },
    handlershopping(short_name){
        dispatch(handlershoppingAction(short_name))
    },
    clickshoppingDel(index){
        dispatch(clickshoppingDelAction(index))
    },
    clickshoppingAdd(index){
        dispatch(clickshoppingAddAction(index))
    }
})
