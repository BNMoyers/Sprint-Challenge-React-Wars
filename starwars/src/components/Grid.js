import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Cards from './Cards';
import axios from 'axios';


 function GridBox() {
    const[character, setCharacter] = useState([]);
    useEffect(() => {
        axios
        .get('https://henry-mock-swapi.herokuapp.com/api')
        .then(res => {
          console.log('fetched data',res.data.results);
          setCharacter(res.data.results);
          console.log('character',character)
        })
  
    },[])
   
     return(
  <Grid columns={3} >
    {console.log('props check',character)}
    {character.map(results => (
        
        <Grid.Column width={5}>
        <Cards  
            
            name={results.name}
            homeworld={results.homeworld}
            birth_year={results.birth_year}
            gender={results.gender}
            films={results.films}/>
            </Grid.Column>
    ))}  
  </Grid>
  );
    }
  
export default GridBox

