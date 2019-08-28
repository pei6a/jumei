import { handleActions } from 'redux-actions'
import { homeSearchType } from '@actions/actionTypes'
const defaultState = {
    searchResult:{}
}
export const searchReducer = handleActions({
    [homeSearchType]: (state, action) => {
        let searchState = JSON.parse(JSON.stringify(state))
        searchState.searchResult = { ...action.value }
        return searchState
    }
}, defaultState)