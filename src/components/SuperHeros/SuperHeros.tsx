import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeList } from "react-window";
import { getHeros } from "../../state/actions/actionCreators";
import { RootStore } from '../../state/store/store';
import HeroItem from "../HeroItem/HeroItem";
import LoaderFirstCard from "../LoaderFirstCard/LoaderFirstCard";
import SearchBar from "../SearchBar/SearchBar";
import st from './SuperHeros.module.css'


const SuperHeros = () => {
    const dispatch = useDispatch()
    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)
    const Row = useCallback(() => {}, [])

    useEffect(() => {
        dispatch(getHeros())
    }, [dispatch])

    console.log(herostate);


    return (
        <div>
            <div>
                <h1>All Superheros</h1>
                <SearchBar />
            </div>
            
        </div>
    )
}

export default SuperHeros