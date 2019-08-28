import {handleActions} from "redux-actions";

const defaultState = {
    selectedAll:true
}

export default handleActions({
    SELECTEC_TYPE:(state,action)=>{
        console.log(111)
        let selectedAll=Object.assign({},state);
        selectedAll=!action.selectedAll;
        return selectedAll;
    }

},defaultState)