import './App.css';
import LikedHeros from './components/LikedHeros/LikedHeros';
import NavBar from './components/NavBar/NavBar';
import SuperHeros from './components/SuperHeros/SuperHeros';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <LikedHeros/>
      <SuperHeros/>
    </div>
  );
}

export default App;
