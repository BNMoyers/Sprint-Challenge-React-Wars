import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Cards from './Cards';
import axios from 'axios';


 function GridBox() {
    const[character, setCharacter] = useState([]);
    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(res => {
          console.log('fetched data',res.data.results);
          setCharacter(res.data.results);
          console.log('character',character)
        })
  
    },[])
   
     return(
  <Grid columns={3} divided>
    {console.log('props check',character)}
    {character.map(results => (
        <Cards  
            
            name={results.name}
            homeworld={results.homeworld}
            birthYear={results.birthYear}
            gender={results.gender}
            films={results.films}/>
    ))}  
  </Grid>
  );
    }
  
export default GridBox

