import {handleActions} from "redux-actions";
import {storeType,storedType} from '../../actions/actionTypes';
const defaultState = {
   storeList:[],
   storedList:[],
   storedzhList:[]
}
export default handleActions({
    [storeType]:(state,action)=>{
        let storeState = Object.assign({},state);
        storeState.storeList=action.payload.data.data.rows;
        return storeState;
    },
    [storedType]:(state,action)=>{
        let storedState = Object.assign({},state);
        storedState.storedList=action.payload.data.data.rows;
        return storedState;
    },
    STOREZH_TYPE:(state,action)=>{
        let storedzhState=Object.assign({},state);
        storedzhState.storedzhList=action.payload.data.data.rows;
        return storedzhState;
    }
},defaultState)