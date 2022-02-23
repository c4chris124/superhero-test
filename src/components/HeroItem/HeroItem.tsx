import st from './HeroItem.module.css'

const HeroItem = (props: any) => {
  return (
    <div className={st.container}>
      <div>
        <img src="" alt="" />
        <p>icon</p>
      </div>
      <div>
        <h4>Hero</h4>
        <p>Hero description</p>
        <p>hero strength</p>
      </div>
    </div>
  )
}

export default HeroItem