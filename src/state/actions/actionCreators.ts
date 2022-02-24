import { HeroDispatchTypes, HEROS_FAIL, HEROS_SUCCESS, LOADING_HEROS, GET_LIKED_HEROS, ADD_LIKED_HERO, LikedHeroDispatchTypes, SEARCH_HEROS } from './actionTypes'
import { api } from '../../credentials'
import { Dispatch } from 'redux'
import axios from 'axios'

const herosUrl = api + 'all.json'
const heroUrlId = api + 'id/'

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

    return (dispatch: Dispatch<LikedHeroDispatchTypes>) => {
        dispatch({
            type: ADD_LIKED_HERO,
            payload
        })
    }
}

export const getLikedHeros = () => (ids: Array<number>) => {
    return async (dispatch: Dispatch<LikedHeroDispatchTypes>) => {
        console.log(`Soy el payload de get liked hero ${ids}`);
        
        try {
            // payload.map(async (e) => {
            //     const res = await axios.get(`heroUrlId${e}.json`)

            // })
            // dispatch({
            //     type: GET_LIKED_HEROS,
            //     payload: res.data
            // })

        } catch (error) {

        }
    }
}

export const searchHero = (payload:string) => {
    return {
        type: SEARCH_HEROS,
        payload
    }
}