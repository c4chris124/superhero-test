import st from './HeroItem.module.css'
import Mheart from '../../assets/medium-heart/medium-heart.svg'
import fist from '../../assets/fist/fist.svg'
import { powerstats } from '../../state/actions/actionTypes'

type HeroProps = {
  id: number | undefined
  image: string | undefined
  name: string | undefined
  realName: string | undefined
  strength: number | undefined
}

const HeroItem = (props: HeroProps) => {
  const {id, image, name, realName, strength} = props
  
  return (
    <div className={st.container}>
      <div>
        <img className={st.imgC} src={image} alt="" />
        <span className={st.heart}>
        <img className={st.icon} src={Mheart} alt="" />
        </span>
      </div>

      <div className={st.content}>
        <h4>{name}</h4>
        <p className={st.content_realName}>Real Name: {realName}</p>
        <p className={st.content_str}> <span><img src={fist} alt="" /></span> {strength} <span className={st.content_score}>/10</span> </p>
      </div>

    </div>
  )
}

export default HeroItem