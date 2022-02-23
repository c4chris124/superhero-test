export const LOADING_HEROS ="LOADING_HEROS"
export const HEROS_FAIL = "HEROS_FAIL"
export const HEROS_SUCCESS = "HEROS_SUCCESS"

export type HeroType = {
    information: Hero
    powerstats: HeroPowerStats[],
    biography: HeroBiography[],
    images: HeroImage[]
}

export type Hero = {
    id: number
    name: string
}

export type HeroPowerStats = {
    powerstats: {
        intelligence: number
        strength: number
        speed: number
        durability: number
        power: number
        combat: number
    }
}

export type HeroBiography = {
    biography: {
        fullName: string
    }
}

export type HeroImage = {
    images: {
        md: string
    }
}

export interface LoadingHeros {
    type: typeof LOADING_HEROS
}
export interface HerosFail {
    type: typeof HEROS_FAIL
}
export interface HerosSuccess {
    type: typeof HEROS_SUCCESS,
    payload: HeroType
}

export type HeroDispatchTypes = LoadingHeros | HerosFail | HerosSuccess