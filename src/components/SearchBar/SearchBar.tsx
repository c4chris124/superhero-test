import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHeros, searchHero } from '../../state/actions/actionCreators'
import st from './SearchBar.module.css'
import searchIcon from '../../assets/search/search.svg'
import cancel from '../../assets/cancel/cancel.svg'


const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchHero(input))
    setInput('')
  }
  const handleCancelButton = () => {
    setInput("Cancel")
    console.log(input);
    
    // dispatch(searchHero(input))
  }
  return (
    <div className={st.container}>
      <form onSubmit={handleSubmit}>
        <div className={st.search_input_container}>
          <img className={st.search_icon} src={searchIcon} alt="" />
          <input className={st.search_input} type="text" onChange={handleChange} />
          {
            input.length ?
            <button className={st.search_button} onClick={handleCancelButton} type='button'>
              <img className={st.search_icon} src={cancel} alt=""  />
            </button>
            : null
          }
        </div>
      </form>
    </div>
  )
}

export default SearchBar