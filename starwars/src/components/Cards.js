import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react'



function Cards(props){
    console.log('card check',props);
return (
    
  <Card.Group>
    <Card>
    <Card.Content>
     <Card.Header>{props.name}</Card.Header>
         Birth Year: {props.birth_year}<br />
         Gender: {props.gender}
     </Card.Content>
    </Card>

   
  </Card.Group>
)}

export default Cards