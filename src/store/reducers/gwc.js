import {
        handlerAType,
        handlerJType,
        handlerSaveType,
        handlerGwcType,
        handlerSelectType,
        handlerInputType,
        handlerUpdateType,
        handlerDelType
    } from '../../actions/actionTypes';
const defaultState = {
    num:1,
    goods:[],
    gwcList:[],
    selectedAll:true,
    list:[]
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case handlerSaveType:
            let goodState=Object.assign({},state);
            //添加公共状态和num值
            action.flag=true;
            action.num=goodState.num;
            // goodState.goods.push(action)
            if(goodState.goods.name){
                // goodState.goods.num++
            }else{
                goodState.goods.push(action)
            }
            return goodState;
        case handlerGwcType:
            let gwcState=Object.assign({},state);
            gwcState.gwcList.push(action);
            return gwcState;
        case handlerSelectType:
            let selectState=Object.assign({},state);
            selectState.selectedAll=!selectState.selectedAll;
            selectState.goods.map(item=>{
                item.flag=selectState.selectedAll
            })
            return selectState;
        case handlerInputType:
            let inputState=JSON.parse(JSON.stringify(state))
            inputState.goods[action.index].flag=!inputState.goods[action.index].flag;
            var bStop=true;
            for(var i=0;i<inputState.goods.length;i++){
                if(!inputState.goods[i].flag){//点击的不是选中状态
                    bStop=false;
                    break;
                }
            }
            inputState.selectedAll=bStop;
            return inputState;
        case handlerUpdateType:
                let updateState=JSON.parse(JSON.stringify(state))
                let goodsPrice=0,goodsNum=0;
                for(var i=0;i<updateState.goods.length;i++){
                    if(updateState.goods[i].flag){
                        goodsNum+=updateState.goods[i].num;
                        goodsPrice+=Math.floor(updateState.goods[i].price*updateState.goods[i].num*100)/100;
                    }
                }
                updateState.goods.goodsPrice=goodsPrice;
                updateState.goods.num=goodsNum;
                return updateState;
        case handlerAType:
                let numState=JSON.parse(JSON.stringify(state));
                numState.goods[action.index].num++;
                return numState;
        case handlerJType:
                let numJState=JSON.parse(JSON.stringify(state))
                if(numJState.goods[action.index].num>1){
                    numJState.goods[action.index].num--;
                }
                return numJState;
        case handlerDelType:
            let delState=JSON.parse(JSON.stringify(state))
            delState.goods.splice(action.index,1)
            return delState;

    }
    return state;
}