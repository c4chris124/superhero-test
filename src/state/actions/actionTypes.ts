export const LOADING_HEROS = "LOADING_HEROS"
export const HEROS_FAIL = "HEROS_FAIL"
export const HEROS_SUCCESS = "HEROS_SUCCESS"
export const GET_LIKED_HEROS = "GET_LIKED_HEROS"
export const ADD_LIKED_HERO = "ADD_LIKED_HERO"
export const REMOVED_LIKED_HEROS = "REMOVED_LIKED_HEROS"

export type powerstats = {
    intelligence: number
    strength: number
    speed: number
    durability: number
    power: number
    combat: number
}

export type biography = {
    fullName: string
}

export type images = {
    md: string
}

export type HeroType = {
    id: number
    name: string
    powerstats: powerstats[]
    biography: biography
    images: images
}

export interface LoadingHeros {
    type: typeof LOADING_HEROS
}
export interface HerosFail {
    type: typeof HEROS_FAIL
}
export interface HerosSuccess {
    type: typeof HEROS_SUCCESS,
    payload: Array<HeroType>
}

export interface AddLikedHeros {
    type: typeof ADD_LIKED_HERO,
    payload: Array<any>
}

export interface removeLikedHeros {
    type: typeof REMOVED_LIKED_HEROS,
    payload: number
}

export interface LikedHeros {
    type: typeof GET_LIKED_HEROS
}

export type HeroDispatchTypes = LoadingHeros | HerosFail | HerosSuccess | AddLikedHeros | LikedHeros | removeLikedHeros
