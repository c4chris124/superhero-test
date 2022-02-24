import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHeros } from '../../state/actions/actionCreators'
import st from './SearchBar.module.css'
import searchIcon from '../../assets/search/search.svg'
import cancel from '../../assets/cancel/cancel.svg'


const SearchBar = () => {
  const dispatch = useDispatch()
  const [heroName, setHeroName] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeroName(e.target.value)
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getHeros)
  }
  return (
    <div className={st.container}>
      <form action="">
        <div className={st.search_input_container}>
          <img className={st.search_icon} src={searchIcon} alt="" />
          <input className={st.search_input} type="text" onChange={handleChange} />
          <img className={st.search_icon} src={cancel} alt="" />

        </div>
      </form>
    </div>
  )
}

export default SearchBar