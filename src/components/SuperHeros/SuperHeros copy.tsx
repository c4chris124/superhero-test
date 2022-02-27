import { useEffect, useMemo, useState }  from "react";
import { useSelector } from "react-redux"
import { RootStore } from '../../state/store/store';
import LoaderCardsContainer from "../LoaderCards/LoaderCardsContainer";
import LoaderTitle from "../LoaderTitles/LoaderTitle";
import SearchBar from "../SearchBar/SearchBar";
import st from './SuperHeros.module.css'
import HeroGrid from "./HeroGrid";
import React from "react";

const SuperHeros = () => {
    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)   
    const [searchTerm, setsearchTerm] = useState('')
    const [searchRedults, setSearchResults] = useState([])
    const likedData = useSelector((state: RootStore) => state.heros.likedHeros)

    const filter = herostate?.filter((e) => {
        return likedData ? !likedData.includes(e.id) : null
      })

      console.log(filter);
      
      useEffect(() => {
          
      }, [likedData])

    const searchHandler = (searchTerm:any, items:any) =>{
        setsearchTerm(searchTerm);
        if (searchTerm !== "") {            
            const newItems = items.filter((item:any) => {
                 return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.biography.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            })            
            setSearchResults(newItems)
        }
        else {
            setSearchResults(items)
        }
    }
    
    return (
        <div className={st.container}>
            <div className={st.header}>
                {
                    loading
                        ?
                        <div>
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
                            <SearchBar term={searchTerm} searchHandler={searchHandler}/>
                    }
                </div>
            </div>
            {
                loading ?
                    <LoaderCardsContainer/>
                    :
                    <HeroGrid items={searchTerm.length < 1 ? filter : searchRedults}/>
            }
        </div>
    )
}

export default React.memo(SuperHeros)

