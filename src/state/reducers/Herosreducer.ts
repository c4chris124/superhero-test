import { HeroDispatchTypes, HEROS_SUCCESS, LOADING_HEROS, HEROS_FAIL, HeroType, GET_LIKED_HEROS, ADD_LIKED_HERO, REMOVED_LIKED_HEROS } from "../actions/actionTypes";


export interface defaultStateI {
    loading: boolean,
    likedHeros?: any
    heros?: HeroType[]
}


const defaultState: defaultStateI = {
    loading: true,
}

const Herosreducer = (state: defaultStateI = defaultState, action: HeroDispatchTypes) : defaultStateI => {
    switch (action.type) {
        case HEROS_FAIL:
            return {
                loading: true
            }
        case LOADING_HEROS:
            return {
                loading: true
            }
        case ADD_LIKED_HERO:
            return {
                ...state,
                likedHeros: action.payload
            }
        case HEROS_SUCCESS:
            return {
                loading: false,
                heros: action.payload
            }
        case GET_LIKED_HEROS:
            // const filter = state.heros?.filter((e) => {

            //     return state.likedData ? state.likedData.includes(e.id) : null
            // })
            
            return {
                loading: false,
            }
            case REMOVED_LIKED_HEROS:
                for (let i = 0; i < state.likedHeros.length; i++) {
                    if (state.likedHeros[i] === action.payload) {
                        state.likedHeros.splice(i,1)
                    }
                  }
                return {
                    loading: false,
                    likedHeros: action.payload
                }    

        default:
            return state
    }
}

export default Herosreducer