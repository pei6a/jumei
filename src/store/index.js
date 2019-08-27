import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {homeReducer} from './homeReducer/reducerHome'
import {searchReducer} from './searchReducer/search'
import {detailReducer} from './detailReducer/detailRe'
const reducer=combineReducers({
    homeReducer,
    searchReducer,
    detailReducer
})

const store=createStore(reducer,applyMiddleware(reduxThunk))
export default store