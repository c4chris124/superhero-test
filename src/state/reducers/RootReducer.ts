import { combineReducers } from "redux";
import Herosreducer from "./Herosreducer";
import LikedHeroReducer from "./LikedHeroReducer";


const RootReducer = combineReducers({
    heros: Herosreducer,
    likedHeros: LikedHeroReducer
})

export default RootReducer