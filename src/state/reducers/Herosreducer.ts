import { HeroDispatchTypes, HEROS_SUCCESS, LOADING_HEROS, HEROS_FAIL, HeroType, GET_LIKED_HEROS, ADD_LIKED_HERO, SEARCH_HEROS } from "../actions/actionTypes";


interface defaultStateI {
    loading: boolean,
    heros?: HeroType[],
    copyHeros?: HeroType[]
}

const defaultState: defaultStateI = {
    loading: false
}

const Herosreducer = (state: defaultStateI = defaultState, action: HeroDispatchTypes): defaultStateI => {
    switch (action.type) {
        case HEROS_FAIL:
            return {
                loading: true
            }
        case LOADING_HEROS:
            return {
                loading: true
            }
        case HEROS_SUCCESS:
            return {
                loading: false,
                heros: action.payload,
                copyHeros: action.payload
            }
        case SEARCH_HEROS:
            let filteredHero = state.copyHeros?.filter((e) => action.payload == e.name || action.payload == e.biography.fullName)        
            return{
                ...state,
                loading: false,
                heros: filteredHero
            }   
        default:
            return state
    }
}

export default Herosreducer