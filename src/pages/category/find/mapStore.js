import {handleFindshowAction,handleChildValAction,handleChildsncValAction,handlerClicksyncIdAction} from "../../../actions/actionCreator"
export const mapStateToProps=(state)=>({
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
    original_image:state.sou.original_image
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
  
})
