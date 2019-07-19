import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react'



function Cards(props){
    console.log('card check',props);
return (
    
  <Card.Group>
    <Card>
     <Card.Content>
     <title>{props.title}</title>
     <div className = 'content'>
         Homeworld: {props.homeworld}
         Birth Year: {props.birthYear}
         Gender: {props.gender}
         Films: {props.films}
     </div>
     </Card.Content>
    </Card>

   
  </Card.Group>
)}

export default Cards