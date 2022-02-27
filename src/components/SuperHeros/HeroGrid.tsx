import AutoSizer from 'react-virtualized-auto-sizer'
import { addLikedHeros } from "../../state/actions/actionCreators";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import HeroItem from "../HeroItem/HeroItem";
import { FixedSizeGrid as Grid } from "react-window";
import st from './SuperHeros.module.css'
import React from 'react';

const getLocalItems = () => {
    let likedItems = localStorage.getItem('likedItems')
    if (likedItems) {
        return JSON.parse(likedItems)
    } else {
        return []
    }
}

type ItemCardGridProps = {
    items?: any[],
    term?: string,
};

const gridPosition = (col: number, row: number) => row * 6 + col;

const HeroGrid = ({ items }: ItemCardGridProps) => {
    const len = items ? items?.length : 0

    const dispatch = useDispatch()
    const [likedItems, setLikedItems] = useState<Array<number | undefined>>(getLocalItems())

    useEffect(() => {
        dispatch(addLikedHeros(getLocalItems()))
        localStorage.setItem('likedItems', JSON.stringify(likedItems))
    }, [likedItems])

    type CellProps = {
        id: number
        name: string
        images: {
            md: string
        }
        biography: {
            fullName: string
        }
        powerstats: {
            intelligence: number
            strength: number
            speed: number
            durability: number
            power: number
            combat: number
        }
        addItem: () => void;
        style: any
    }

    const Cell = ({ id, name, images, biography, powerstats, addItem, style }: CellProps) => {

        addItem = () => {
            setLikedItems([...likedItems, id])
        }
        const stats = powerstats && powerstats
        const strength = (Object.values(stats).reduce((a, b) => a + b, 0) / 60).toFixed(2)
        const num = parseFloat(strength)

        return (
            <div style={style}>
                <a href="#top" style={{  all: 'unset', cursor: 'pointer' }} onClick={addItem}>
                    <HeroItem key={id} id={id} image={images?.md} name={name} realName={biography?.fullName} strength={num} />
                </a>
            </div>
        )
    }

    const S = useMediaQuery("(min-width:360px)");
    const M = useMediaQuery("(min-width:600px)");
    const L = useMediaQuery("(min-width:1024px)");
    const XL = useMediaQuery("(min-width:1600px)");

    const grid = {
        columns: 0
    }

    if (XL) {
        grid.columns = 6;
    } else if (L) {
        grid.columns = 4;
    } else if (M) {
        grid.columns = 3;
    } else if (S) {
        grid.columns = 2;
    } else {
        grid.columns = 2;
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <Grid
                    columnCount={grid.columns}
                    columnWidth={width / grid.columns}
                    height={610}
                    rowCount={Math.ceil(len / grid.columns)}
                    overscanRowCount={20}
                    rowHeight={205}
                    width={width}
                    style={{ margin: '10px' }}
                >
                    {({ columnIndex, rowIndex, style }) => {
                        const i = gridPosition(columnIndex, rowIndex);
                        if (!items || items.length === 0 || i >= items.length) return null;
                        return (
                            <Cell
                                {...items[i]}
                                style={style}
                            />
                        );
                    }}
                </Grid>
            )}
        </AutoSizer>
    )
}

export default HeroGrid