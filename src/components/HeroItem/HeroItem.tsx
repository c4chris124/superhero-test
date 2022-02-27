import st from './HeroItem.module.css'
import Mheart from '../../assets/medium-heart/medium-heart.svg'
import fist from '../../assets/fist/fist.svg'
import filledHeart from '../../assets/medium-filled-heart/medium-filled-heart.svg'
import { useSelector } from 'react-redux'
import { RootStore } from '../../state/store/store'


type HeroProps = {
  id: number | undefined
  image: string | undefined
  name: string | undefined
  realName: string | undefined
  strength: number | undefined
}

const HeroItem = (props: HeroProps) => {
  const { id, image, name, realName, strength } = props

  const likedData = useSelector((state: RootStore) => state.heros.likedHeros)
  const filled = likedData.includes(id)


  return (
    <div className={st.container}>
      {
        filled ?
          <button style={{ all: 'unset', cursor: 'pointer' }}>
            <div>
              <img className={st.imgC} src={image} alt="" />
              <span className={st.heart}>
                <img className={st.icon} src={filledHeart} alt="" />
              </span>
            </div>
          </button>
          :
          <div>
            <img className={st.imgC} src={image} alt="" />
            <span className={st.heart}>
              <img className={st.icon} src={Mheart} alt="" />
            </span>
          </div>
      }

      <div className={st.content}>
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <p className={st.content_realName}>Real Name: {realName}</p>
        </div>
        <div className={st.container_str} >
          <p> <span><img src={fist} alt="" /></span> {strength} <span className={st.content_score}>/10</span> </p>
        </div>
      </div>

    </div >
  )
}

export default HeroItem