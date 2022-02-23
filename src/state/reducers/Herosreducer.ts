import { HeroDispatchTypes, HEROS_SUCCESS, LOADING_HEROS, HEROS_FAIL, HeroType } from "../actions/actionTypes";


interface defaultStateI {
    loading: boolean,
    heros?: HeroType[]
}

const defaultState: defaultStateI = {
    loading: false
}

const Herosreducer = (state: defaultStateI = defaultState, action: HeroDispatchTypes): defaultStateI => {
    switch (action.type) {
        case HEROS_FAIL:
            return {
                loading: false
            }
        case LOADING_HEROS:
            return {
                loading: true
            }
        case HEROS_SUCCESS:
            return {
                loading: false,
                heros: action.payload
            }
        default:
            return state
    }
}

export default Herosreducer