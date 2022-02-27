import { combineReducers } from "redux";
import Herosreducer from "./Herosreducer";


const RootReducer = combineReducers({
    heros: Herosreducer
})

export default RootReducer