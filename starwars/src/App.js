import React, { useState, useEffect } from 'react';
import './App.css';
import GridBox from './components/Grid.js';
import axios from 'axios';

const App = () => {
  const[character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(err => console.log(err));

  },[])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <GridBox props={character} />
      </div>

    </div>
  );
}

export default App;
