import { combineReducers } from "redux";
import reducer from './reducer'
import ErrorReducer from "./ErrorReducer";


const rootreducer=combineReducers({
   reducer,ErrorReducer
})

export default rootreducer