import { GET_LIKED_HEROS, ADD_LIKED_HERO, LikedHeroDispatchTypes, HeroType } from "../actions/actionTypes";


interface defaultStateI {
    likedHeros? : Array<number>
    likedHerosData? : HeroType[]
}

const defaultState: defaultStateI = {
    
}



const LikedHeroReducer = (state: defaultStateI = defaultState, action: LikedHeroDispatchTypes): defaultStateI => {
    switch (action.type) {
        case ADD_LIKED_HERO:
            return {
                ...state,
                likedHeros: action.payload
            }
        case GET_LIKED_HEROS:

            return {
                ...state,
                likedHerosData: action.payload
            }
        default:
            return state
    }
}

export default LikedHeroReducer