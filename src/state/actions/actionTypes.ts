export const LOADING_HEROS = "LOADING_HEROS"
export const HEROS_FAIL = "HEROS_FAIL"
export const HEROS_SUCCESS = "HEROS_SUCCESS"
export const SEARCH_HEROS = "SEARCH_HEROS"
export const GET_LIKED_HEROS = "GET_LIKED_HEROS"
export const ADD_LIKED_HERO = "ADD_LIKED_HERO"

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
export interface SearchHeros {
    type: typeof SEARCH_HEROS,
    payload: HeroType
}

export interface AddLikedHeros {
    type: typeof ADD_LIKED_HERO,
    payload: number[]
}

export interface LikedHeros {
    type: typeof GET_LIKED_HEROS,
    payload: Array<HeroType>
}

export type HeroDispatchTypes = LoadingHeros | HerosFail | HerosSuccess 

export type LikedHeroDispatchTypes = AddLikedHeros | LikedHeros