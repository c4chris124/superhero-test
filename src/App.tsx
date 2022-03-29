import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import LikedHeros from './components/LikedHeros/LikedHeros';
import NavBar from './components/NavBar/NavBar';
import SuperHeros from './components/SuperHeros/SuperHeros copy';
import { getHeros } from './state/actions/actionCreators';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeros())
}, [dispatch])

  return (
    <div className="App">
      <div className="container">
      <NavBar/>
      <LikedHeros/>
      </div>
      <SuperHeros/>
    </div>
  );
}

export default App;
