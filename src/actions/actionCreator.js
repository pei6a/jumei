import {createAction} from "redux-actions";
import {gloupApiItems} from '../api/movie';
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
