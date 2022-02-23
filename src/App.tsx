import { useSelector } from 'react-redux';
import './App.css';
import LikedHeros from './components/LikedHeros/LikedHeros';
import NavBar from './components/NavBar/NavBar';
import SuperHeros from './components/SuperHeros/SuperHeros';
import { RootStore } from './state/store/store';


function App() {
  // const herostate = useSelector((state: RootStore) => state.heros)

  return (
    <div className="App">
      <NavBar/>
      <LikedHeros/>
      <SuperHeros/>
    </div>
  );
}

export default App;
