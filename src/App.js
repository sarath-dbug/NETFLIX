import React from 'react'
import './App.css'
import { action, originals, ComedyMovies} from './urls';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix orginals' /> 
      <RowPost url={action} title='Action' isSmall /> 
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall /> 
    </div>
  );
}
export default App;
