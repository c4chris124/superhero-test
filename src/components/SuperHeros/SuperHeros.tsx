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




const SuperHeros = () => {

    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)

    const Cells = useCallback((i, style) => {

        const { id, images, name, biography } = herostate && herostate[i] || {}

        // post.Reviews.map(item => item.rating).reduce((a, b) => a + b, 0) / post.Reviews.length
        return (
            <div style={style}>
                <HeroItem image={images?.md} key={id} name={name} realName={biography?.fullName} strength={1} />
            </div>
        )
    }, [])

    type CellProps = {
        columnIndex: number
        rowIndex: number
        style: any
    }

    const Cell = ({ columnIndex, rowIndex, style }:CellProps) => {
        const { id, images, name, biography } = herostate && herostate[rowIndex] || {}
        return (
            <div style={style}>
                <HeroItem image={images?.md} key={id} name={name} realName={biography?.fullName} strength={1} />
            </div>
        )
    }

    console.log(herostate);

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
            {/* <div className={st.item_container}> */}
            <Grid
            columnCount={4}
            columnWidth={350}
            height={800}
            rowCount={100}
            rowHeight={220}
            width={1500}
            >
                {Cell}
            </Grid>
            {/* </div> */}
        </div>
    )
}

// {herostate?.map((e) => {
//     const strength = Math.floor(Object.values(e.powerstats).reduce((a, b) => a + b, 0) /  Object.values(e.powerstats).length * .10)
//     console.log(e.images);

//     return <HeroItem key={e.id} image={e.images.md} name={e.name} realName={e.biography.fullName} strength={strength} />
// })}

export default SuperHeros

