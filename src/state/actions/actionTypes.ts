export const LOADING_HEROS = "LOADING_HEROS"
export const HEROS_FAIL = "HEROS_FAIL"
export const HEROS_SUCCESS = "HEROS_SUCCESS"
export const SEARCH_HEROS = "SEARCH_HEROS"

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
    powerstats: powerstats
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

export type HeroDispatchTypes = LoadingHeros | HerosFail | HerosSuccess