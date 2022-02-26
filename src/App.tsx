import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LikedHeros from './components/LikedHeros/LikedHeros';
import NavBar from './components/NavBar/NavBar';
// import SuperHeros from './components/SuperHeros/SuperHeros';
import SuperHeros from './components/SuperHeros/SuperHeros copy';
import { getHeros } from './state/actions/actionCreators';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeros())
}, [dispatch])

  return (
    <div className="App">
      <NavBar/>
      {/* <div style={{width: '100%', height: '100%'}}> */}
      <LikedHeros/>
      {/* </div> */}
      {/* <div style={{width: '100%', height: '100%'}}> */}
      <SuperHeros/>
      {/* </div> */}
    </div>
  );
}

export default App;
