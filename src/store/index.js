import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import sou from "./reducers/sou"
const reducer=combineReducers({
    sou,
})
const store=createStore(reducer,applyMiddleware(reduxThunk))
export default store