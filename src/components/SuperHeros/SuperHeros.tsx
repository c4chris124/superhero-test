import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeGrid as Grid } from "react-window";
import { getHeros } from "../../state/actions/actionCreators";
import { HeroType } from "../../state/actions/actionTypes";
import { RootStore } from '../../state/store/store';
import HeroItem from "../HeroItem/HeroItem";
import LoaderCards from "../LoaderCards/LoaderCards";
import SearchBar from "../SearchBar/SearchBar";
import st from './SuperHeros.module.css'
import useLocalStorage from "../../hooks/useLocalStorage";
import AutoSizer from 'react-virtualized-auto-sizer'

const SuperHeros = () => {
    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)

    type CellProps = {
        columnIndex: number
        rowIndex: number
        style: any
    }

    const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
        const { id, images, name, biography, powerstats } = herostate && herostate[rowIndex] || {}
        const stats = powerstats && powerstats?[rowIndex]: Number
        const strength = Math.floor(Object.values(stats).reduce((a, b) => a + b, 0) /  Object.values(stats).length * .10)
        return (
            <div style={style}>
                <HeroItem id={id} image={images?.md} key={id} name={name} realName={biography?.fullName} strength={ strength } />
            </div>
        )
    }

    return (
        <div className={st.container}>
            <div className={st.header}>
                <div className={st.title_container}>
                    <h1>All Superheros</h1>
                </div>
                <div className={st.search_container}>
                    <SearchBar />
                </div>
            </div>
            <Grid
                columnCount={4}
                columnWidth={350}
                height={800}
                rowCount={100}
                rowHeight={220}
                width={1400}
            >
                {Cell}
            </Grid>
        </div>
    )
}

// {herostate?.map((e) => {
//     const strength = Math.floor(Object.values(e.powerstats).reduce((a, b) => a + b, 0) /  Object.values(e.powerstats).length * .10)
//     console.log(e.images);

//     return <HeroItem key={e.id} image={e.images.md} name={e.name} realName={e.biography.fullName} strength={strength} />
// })}

export default SuperHeros

