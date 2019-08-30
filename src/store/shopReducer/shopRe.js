import { handleActions } from 'redux-actions'
import { shopAllGoodsPage } from '@actions/actionTypes'
const defaultState = {
    shopAllResult: {},
}
export const shopReducer = handleActions(
    {
        [shopAllGoodsPage]: (state, action) => {
            let shopState = JSON.parse(JSON.stringify(state))
            shopState.shopAllResult = { ...action.value }
            return shopState
        }
    }, defaultState)