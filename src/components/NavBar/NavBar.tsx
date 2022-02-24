import st from './NavBar.module.css'
import logo from '../../assets/logo/logo.svg'

const NavBar = () => {
  return (
    <div className={st.navbar_container}>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default NavBar