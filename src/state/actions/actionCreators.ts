import { HeroDispatchTypes, HEROS_FAIL, HEROS_SUCCESS, LOADING_HEROS } from './actionTypes'
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

        dispatch ({
            type: HEROS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: HEROS_FAIL
        })
    }
}