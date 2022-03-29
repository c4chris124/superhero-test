import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import smallHeart from '../../assets/small-heart/small-heart.svg'
import st from './LikedHeros.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../state/store/store';
import HeroItem from '../HeroItem/HeroItem';
import bigHeart from '../../assets/big-heart/big-heart.svg'


const LikedHeros = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const likedData = useSelector((state: RootStore) => state.heros.likedHeros)
  const heros = useSelector((state: RootStore) => state.heros.heros)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const filter = heros?.filter((e) => {
      return likedData ? likedData.includes(e.id) : null
    })
    
  //   useEffect(() => {

  //   setLikedHeros(filter)

  // }, [])

  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      sx={{
        background: expanded ? '#11072F' : '#2A1B57',
        color: 'white',
        outline: `2px solid  #7255A7`,
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon
          sx={{ color: 'white', fontSize: '30px' }}
        />}
        sx={{
          height: '80px'
        }}
      >
        <div className={st.header_container}>
          <span className={st.heart_container}>
            <img src={smallHeart} alt="" />
          </span>
          <h2>Liked</h2>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {
          likedData ?
            <div className={st.cards_container}>
              {
                filter?.map((e: any) => {
                  const stats: object = e.powerstats
                  const strength = (Object.values(stats).reduce((a, b) => a + b, 0) / 60).toFixed(2)
                  const num = parseFloat(strength)
                  return < HeroItem key={e.id} id={e.id} image={e.images?.md} name={e.name} realName={e.biography?.fullName} strength={num} />
                })
              }
            </div>
            :
            <div >
              <img src={bigHeart} alt="" />
              <h3>You haven't liked any superhero yet</h3>
            </div>
        }
      </AccordionDetails>
    </Accordion>
  )
}

export default LikedHeros