import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import smallHeart from '../../assets/small-heart/small-heart.svg'
import st from './LikedHeros.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../state/store/store';
import { getLikedHeros } from '../../state/actions/actionCreators';
const LikedHeros = () => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState<string | false>(false);
  const likedItemsId = useSelector((state: RootStore) => state.likedHeros.likedHeros)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


  useEffect(() => {
    // dispatch(getLikedHeros(likedItemsId))
  }, [])

  return (
    <div>
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
            sx={{ color: 'white', fontSize: '30px'}}
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
          Hola
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default LikedHeros