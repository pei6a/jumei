import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import sou from "./reducers/sou";
import gloup from './reducers/gloup';
import gwc from './reducers/gwc';
const reducer=combineReducers({
    sou,
    gloup,
    gwc
})
const store=createStore(reducer,applyMiddleware(reduxThunk))
export default store;