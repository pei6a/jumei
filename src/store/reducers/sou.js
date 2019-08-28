
import {souMsapiActionType,handleFindshowActionType,handleChildValActionType,
    handleFindValActionType,handlerClickIdActionType
} from "../../actions/actionType"
const defaultState={
    souMsapiList:[],
    color:"",
    findflag:false,
    findindex:10,
    findpagelist:["品牌","分类","功效","价格"],
    category_data:[],
    findIdindex:0,
    findid:"",
    findType:"",
    findjumei_price:"",
    findmarket_price:"",
    finddata:[],
    original_image:""
}
export default (state=defaultState,action)=>{
    // console.log(action)
    let finddata=Object.assign({},state)
    switch(action.type){
        case souMsapiActionType:
            let finddataApi=JSON.parse(JSON.stringify(state))
            finddataApi.souMsapiList=action.value.data
            return finddataApi
        case handleFindshowActionType:
            // console.log(action.index)
            finddata.findindex=action.index;
            finddata.findflag=!finddata.findflag
            if(!finddata.findflag){
                finddata.findindex=10
               
            }    
            // console.log(finddata.souMsapiList[finddata.findindex],6666)
            return finddata;
        case handleChildValActionType:
            finddata.category_id=finddata.souMsapiList[finddata.findindex].sub_categories[action.index1].category_id
            // console.log(finddata.category_id)
            return finddata
        case handleFindValActionType:
            finddata.category_data=action.data.data.item_list
            // console.log(finddata.category_data,123456)
            return finddata
        case handlerClickIdActionType:
            let finddataId=JSON.parse(JSON.stringify(state))
            finddataId.findIdindex=action.index
            finddataId.findid=action.itemid
            finddataId.findType=action.itemtype
            finddataId.findjumei_price=action.jumei_price
            finddataId.findmarket_price=action.market_price
            finddataId.finddata=action.data.data
            finddataId.original_image=action.original_image

            // console.log(action.index,action.itemid,action.original_image,action.itemtype,action.jumei_price,action.market_price,action.data,22222)
            return finddataId
    }
    return state
}