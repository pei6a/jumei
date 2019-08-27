import {handleActions} from 'redux-actions'
import {homeIndexNowType,homeIndexPreType} from '../../actions/actionTypes'
const defaultState = {
    homeNowGoods:[],
    homePreGoods:[],
}
export const homeReducer=handleActions({
[homeIndexNowType]:(state,action)=>{
    let homeNowState=JSON.parse(JSON.stringify(state))
    homeNowState.homeNowGoods={...action.value}
    return homeNowState
},
[homeIndexPreType]:(state,action)=>{
    let homePreState=JSON.parse(JSON.stringify(state))
    console.log(action,888)
    homePreState.homePreGoods={...action.value}
    return homePreState

}
},defaultState)