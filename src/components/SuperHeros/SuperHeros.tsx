import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeGrid as Grid } from "react-window";
import { addLikedHeros, getHeros } from "../../state/actions/actionCreators";
import { HeroType } from "../../state/actions/actionTypes";
import { RootStore } from '../../state/store/store';
import HeroItem from "../HeroItem/HeroItem";
import LoaderCards from "../LoaderCards/LoaderCards";
import LoaderTitle from "../LoaderTitles/LoaderTitle";
import SearchBar from "../SearchBar/SearchBar";
import st from './SuperHeros.module.css'
import AutoSizer from 'react-virtualized-auto-sizer'
const getLocalItems = () => {
    let items = localStorage.getItem('items')
    if (items) {
        return JSON.parse(items)
    } else {
        return []
    }
}

const SuperHeros = () => {
    const dispatch = useDispatch()
    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)
    const [heros, setHeros] = useState<HeroType>()
    const [items, setItems] = useState<Array<number | undefined>>(getLocalItems())
    const len:number|undefined = herostate?.length

    type CellProps = {
        columnIndex: number
        rowIndex: number
        style: any
    }



    const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
        const { id, images, name, biography, powerstats } = herostate && herostate[rowIndex] || {}
        const stats = powerstats && powerstats ? [rowIndex] : Number
        const strength = (Object.values(stats).reduce((a, b) => a + b, 0) / 60).toFixed(2)
        const num = parseFloat(strength)
        
        const addItem = () => {
            setItems([...items, id])
        }

        return (
            <div style={style}>
                {
                    loading
                        ?
                        <LoaderCards />
                        :
                        <a href="#top" style={{ textDecoration: 'none', color: 'inherit' }} onClick={addItem}>
                            <HeroItem key={id} id={id} image={images?.md} name={name} realName={biography?.fullName} strength={num} />
                        </a>
                }
            </div>
        )
    }


    useEffect(() => {
        // setHeros(herostate)
        dispatch(addLikedHeros(getLocalItems()))
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
    
    return (
        <div className={st.container}>
            <div className={st.header}>
                {
                    loading
                        ?
                        <div className="">
                            <LoaderTitle />
                        </div>
                        :
                        <div className={st.title_container}>
                            <h1>All Superheros</h1>
                        </div>
                }
                <div className={st.search_container}>
                    {
                        loading
                            ?
                            <LoaderTitle />
                            :
                            <SearchBar />
                    }
                </div>
            </div>
            <Grid
                columnCount={4}
                columnWidth={350}
                height={800}
                rowCount={len || 100}
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

