import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import st from './SearchBar.module.css'
import searchIcon from '../../assets/search/search.svg'
import cancel from '../../assets/cancel/cancel.svg'
import { RootStore } from '../../state/store/store'


const SearchBar = (props:any) => {
  const dispatch = useDispatch()
  const herostate = useSelector((state: RootStore) => state.heros.heros)
  const [input, setInput] = useState("")
  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleChange = () => {
    // setInput(e.target.value)
    setInput(inputField.current.value);
    props.searchHandler(inputField.current.value, herostate)
  }

  const handleCancelButton = () => {
    setInput("")
  }

  return (
    <div className={st.container}>
        <div className={st.search_input_container}>
          <img className={st.search_icon} src={searchIcon} alt="" />
          <input className={st.search_input} ref={inputField} type="text" value={input} onChange={handleChange}  />
          {
            input.length ?
            <button className={st.search_button} onClick={handleCancelButton} type='button'>
              <img className={st.search_icon} src={cancel} alt=""  />
            </button>
            : null
          }
        </div>
    </div>
  )
}

export default SearchBar