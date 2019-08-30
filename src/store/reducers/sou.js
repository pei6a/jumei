
import {
    souMsapiActionType, handleFindshowActionType, handleChildValActionType,
    handleFindValActionType, handlerClickIdActionType, dianpusyncActionType,
    handleDianpuNavActionType, handledianpuDataActionType,
    handleDianfilterActionType,handleCilchfiterindexActionType,handlershoppingActionType,
    clickshoppingDelActionType,clickshoppingAddActionType
} from "../../actions/actionType"
const defaultState = {
    page:1,
    souMsapiList: [],
    color: "",
    findflag: false,
    findindex: 10,
    findpagelist: ["品牌", "分类", "功效", "价格"],
    category_data: [],
    findIdindex: 0,
    findid: "",
    findType: "",
    findjumei_price: "",
    findmarket_price: "",
    finddata: {},
    original_image: "",
    dianpunav: ["综合", "价格", "销量"],
    dianpunavnum: 0,
    dianpudate: [],
    dianpusort: "",
    xuanfilter:[
    ["全部","护肤套装","眼部护理","化妆水/爽肤水","面膜","洁面","底妆","面霜","乳液","精华","防晒","卸妆"],
    ["全部","保湿","补水","滋润","修护肌肤","修护","遮瑕","均匀肤色","收敛毛孔","清洁","温和","防晒"],
    ["全部","AHC"],
    ["全部","1-49","50-99","100-199","200-299","300-399","400-599","600-799","800以上"],
    ],
    filterindex:0,
    filterindex1:0,
    arr:[],
    arr1:[],
    shoppingNum:1,
    num:0,
    price:0,
    shoppingshow:true

}
export default (state = defaultState, action) => {
    // console.log(action)
    let finddata = Object.assign({}, state)
    switch (action.type) {
        case souMsapiActionType:
            let finddataApi = JSON.parse(JSON.stringify(state))
            finddataApi.souMsapiList = action.value.data
            return finddataApi
        case handleFindshowActionType:
            // console.log(action.index)
            finddata.findindex = action.index;
            finddata.findflag = !finddata.findflag
            if (!finddata.findflag) {
                finddata.findindex = 10

            }
            // console.log(finddata.souMsapiList[finddata.findindex],6666)
            return finddata;
        case handleChildValActionType:
            finddata.category_id = finddata.souMsapiList[finddata.findindex].sub_categories[action.index1].category_id
            // console.log(finddata.category_id)
            return finddata
        case handleFindValActionType:
            finddata.category_data = action.data.data.item_list
            // console.log(finddata.category_data,123456)
            return finddata
        case handlerClickIdActionType:
            let finddataId = JSON.parse(JSON.stringify(state))
            finddataId.findIdindex = action.index
            finddataId.findid = action.itemid
            finddataId.findType = action.itemtype
            finddataId.findjumei_price = action.jumei_price
            finddataId.findmarket_price = action.market_price
            finddataId.finddata = action.data.data
            finddataId.original_image = action.original_image

            // console.log(action.index,action.itemid,action.original_image,action.itemtype,action.jumei_price,action.market_price,action.data,22222)
            return finddataId
        case dianpusyncActionType:
            let dianpudata = JSON.parse(JSON.stringify(state))
            dianpudata.dianpudate = action.data.data.data.rows
            console.log(action.data.data)           
            return dianpudata
        case handleDianpuNavActionType:
            let dianpudata1 = JSON.parse(JSON.stringify(state))
            dianpudata1.dianpunavnum = action.index
            // console.log(action.index, action.data1, action.dianpusort)
            switch (action.index) {
                case 0:
                    dianpudata1.dianpusort = ""
                    dianpudata1.dianpudate = action.data1.data.data.rows
                    return dianpudata1
                case 1:
                    dianpudata1.dianpusort = "21"
                    dianpudata1.dianpudate = action.data1.data.data.rows

                    return dianpudata1
                case 2:
                    dianpudata1.dianpusort = "20"
                    dianpudata1.dianpudate = action.data1.data.data.rows

                    return dianpudata1
                default:
                    return state;
            }
        case handledianpuDataActionType:
            let finddianpu = JSON.parse(JSON.stringify(state))
            finddianpu.finddata = finddianpu.dianpudate[action.index]
            finddianpu.original_image = action.image_url
            finddianpu.findjumei_price = action.jumei_price
            finddianpu.findmarket_price = action.market_price

            // console.log(action.short_name,action.image_url,action.jumei_price,action.market_price,12)
            return finddianpu
        case handleDianfilterActionType:
            console.log(action.index)
            finddata.filterindex=action.index
            return finddata
        case handleCilchfiterindexActionType:
            finddata.filterindex1=action.index1
            return finddata
        case handlershoppingActionType:
            // console.log(finddata.original_image,finddata.findjumei_price,action.short_name,787878)
            // let finddatashop = JSON.parse(JSON.stringify(state))
            let obj={}
            obj.original_image=finddata.original_image;
            obj.findjumei_price=finddata.findjumei_price;
            obj.short_name=action.short_name;
            obj.shoppingNum=finddata.shoppingNum
            finddata.arr.push(obj);
            for(var i=0;i<finddata.arr.length;i++){
            //   console.log(finddata.arr[i].short_name,1)
              var bool=true;
              for(var j=0;j<finddata.arr1.length;j++){
                  if(finddata.arr[i].short_name===finddata.arr1[j].short_name){
                      bool=false;
                      finddata.arr[i].shoppingNum++
                      break
                  }
              }
              if(bool){
                finddata.arr1.push(finddata.arr[i])
                finddata.num=0
                finddata.price=0
                for(let n=0;n<finddata.arr1.length;n++){ 
                   finddata.num+=finddata.arr1[n].shoppingNum
                   finddata.price+=Number(finddata.arr1[n].findjumei_price)
                }
              }
            };
            
            // console.log(finddata.arr,9,finddata.arr1,1,action,finddata.arr,777)
            return finddata
        case clickshoppingDelActionType:
            let finddatanum = JSON.parse(JSON.stringify(state))
            if(finddatanum.arr1[action.index].shoppingNum>1){
                finddatanum.arr1[action.index].shoppingNum--;
                finddatanum.arr1[action.index].findjumei_price=(finddatanum.arr1[action.index].findjumei_price-finddatanum.findjumei_price).toFixed(2)
                finddatanum.num--;
                finddatanum.price=(Number(finddatanum.price)-Number(finddatanum.findjumei_price)).toFixed(2);

            }else{
                finddatanum.arr1[action.index].shoppingNum=1;
            }
            return finddatanum
        case clickshoppingAddActionType:
            let finddatanumAdd = JSON.parse(JSON.stringify(state))
            finddatanumAdd.arr1[action.index].shoppingNum++;
            finddatanumAdd.arr1[action.index].findjumei_price=(finddatanumAdd.findjumei_price*finddatanumAdd.arr1[action.index].shoppingNum).toFixed(2)
            finddatanumAdd.num++;
            finddatanumAdd.price=(Number(finddatanumAdd.price)+Number(finddatanumAdd.findjumei_price)).toFixed(2);
            return finddatanumAdd
        default:
            return state;
    }
}