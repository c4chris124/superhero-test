import st from './HeroItem.module.css'
import Mheart from '../../assets/medium-heart/medium-heart.svg'
import fist from '../../assets/fist/fist.svg'

type HeroProps = {
  image: string | undefined
  name: string | undefined
  realName: string | undefined
  strength: number | undefined
}

const HeroItem = (props: HeroProps) => {
  const {image, name, realName, strength} = props
  
  return (
    <div className={st.container} style={{backgroundImage: `url(${image})`}} >
      <div>
        <img className={st.imgC} src={image} alt="" />
        <span className={st.heart}>
        <img className={st.icon} src={Mheart} alt="" />
        </span>
      </div>

      <div className={st.content}>
        <h4>{name}</h4>
        <p>{realName}</p>
        <p> <span><img src={fist} alt="" /></span> {strength} <span>/10</span> </p>
      </div>

    </div>
  )
}

export default HeroItem