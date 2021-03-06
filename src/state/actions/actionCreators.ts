import { HeroDispatchTypes, HEROS_FAIL, HEROS_SUCCESS, LOADING_HEROS, GET_LIKED_HEROS, ADD_LIKED_HERO, REMOVED_LIKED_HEROS} from './actionTypes'
import { api } from '../../credentials'
import { Dispatch } from 'redux'
import axios from 'axios'

const herosUrl = api + 'all.json'

export const getHeros = () => async (dispatch: Dispatch<HeroDispatchTypes>) => {
    try {
        dispatch({
            type: LOADING_HEROS
        })

        const res = await axios.get(herosUrl)

        dispatch({
            type: HEROS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: HEROS_FAIL
        })
    }
}

export const addLikedHeros = (payload: Array<number>) => {

    return (dispatch: Dispatch<HeroDispatchTypes>) => {
        dispatch({
            type: ADD_LIKED_HERO,
            payload
        })
    }
}

export const removeLikedHeros = (payload: number) => {

    return (dispatch: Dispatch<HeroDispatchTypes>) => {
        dispatch({
            type: REMOVED_LIKED_HEROS,
            payload
        })
    }
}



export const getLikedHeros = () => {
    return {
        type: GET_LIKED_HEROS
    }
}