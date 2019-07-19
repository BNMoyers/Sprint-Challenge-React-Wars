import React, { useState, useEffect } from 'react';
import './App.css';
import GridBox from './components/Grid.js';



const App = () => {
  
  
  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      <div>
        <GridBox />
      </div>

    </div>
  );
}

export default App;
