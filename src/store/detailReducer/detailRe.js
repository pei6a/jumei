import {handleActions} from 'redux-actions'
import {detailPageType} from '@actions/actionTypes'
const defaultState = {
    detailResult:{},
    detailDesc:{},
}
export const detailReducer=handleActions(
    {
[detailPageType]:(state,action)=>{
    let detailState=JSON.parse(JSON.stringify(state))
    detailState.detailResult={...action.value}
    detailState.detailDesc={...action.desc}
    return detailState
}
},defaultState)