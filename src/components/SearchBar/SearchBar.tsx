import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHeros } from '../../state/actions/actionCreators'

const SearchBar = () => {
    const dispatch = useDispatch()
    const[heroName, setHeroName] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeroName(e.target.value)
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(getHeros)
    }
  return (
    <div>
    <input type="text" onChange={handleChange} />
    <button>Search</button>
    </div>
  )
}

export default SearchBar