import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const Item = styled('div')`
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
`;

const Products = () => {
  return (
    <div>
      <Grid container spacing={2}>

        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
     
      </Grid>
    </div>
  );
};

export default Products;
