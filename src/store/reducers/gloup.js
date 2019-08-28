import {handleActions} from "redux-actions";

const defaultState = {
    itemsList:[],
    list:[],
    imgs:[],
    info:[],
    buy:[]
}

export default handleActions({
    ITEMS_TYPE:(state,action)=>{
        let listState = Object.assign({},state);
        listState.itemsList = action.payload.data;
        listState.list=action.payload.data.buy_alone;
        listState.imgs=action.payload.data.size[0];
        listState.info=action.payload.data.shop_info;
        listState.buy=action.payload.data.bottom_button;
        return listState;
    }
},defaultState)