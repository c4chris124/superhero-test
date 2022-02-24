import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import LikedHeros from './components/LikedHeros/LikedHeros';
import NavBar from './components/NavBar/NavBar';
import SuperHeros from './components/SuperHeros/SuperHeros';
import { getHeros } from './state/actions/actionCreators';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeros())
}, [dispatch])

  return (
    <div className="App">
      <NavBar/>
      <div style={{width: '70%'}}>
      <LikedHeros/>
      </div>
      <div>
      <SuperHeros/>
      </div>
    </div>
  );
}

export default App;
