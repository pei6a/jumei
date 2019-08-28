import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import sou from "./reducers/sou";
import gloup from './reducers/gloup';
import gwc from './reducers/gwc';
import {homeReducer} from './homeReducer/reducerHome'
import {searchReducer} from './searchReducer/search'
import {detailReducer} from './detailReducer/detailRe'
const reducer=combineReducers({
    
    gloup,
    gwc,
    homeReducer,
    searchReducer,
    detailReducer,
    sou
})
const store=createStore(reducer,applyMiddleware(reduxThunk))
export default store
