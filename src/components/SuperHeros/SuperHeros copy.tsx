import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeGrid as Grid } from "react-window";
import { addLikedHeros, getHeros } from "../../state/actions/actionCreators";
import { HeroType } from "../../state/actions/actionTypes";
import { RootStore } from '../../state/store/store';
import HeroItem from "../HeroItem/HeroItem";
import LoaderCardsContainer from "../LoaderCards/LoaderCardsContainer";
import LoaderTitle from "../LoaderTitles/LoaderTitle";
import SearchBar from "../SearchBar/SearchBar";
import st from './SuperHeros.module.css'
import AutoSizer from 'react-virtualized-auto-sizer'
import HeroGrid from "./HeroGrid";

const SuperHeros = () => {
    const herostate = useSelector((state: RootStore) => state.heros.heros)
    const loading = useSelector((state: RootStore) => state.heros.loading)

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
                            <SearchBar />
                    }
                </div>
            </div>
            {
                loading ?
                    <LoaderCardsContainer/>
                    :
                    <HeroGrid items={herostate} />
            }
        </div>
    )
}

export default SuperHeros

