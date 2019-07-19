import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Cards from './Cards';


const GridBox = (props) => (
  <Grid columns={3} divided>
    <Cards />
  </Grid>
)

export default GridBox