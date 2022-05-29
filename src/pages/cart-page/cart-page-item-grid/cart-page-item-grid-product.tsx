import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItemJoined } from '../../../types';
import NumberField from '../../../components/number-field';

type CartPageItemGridProductProps = CartItemJoined;

const CartPageItemGridProduct: React.FC<CartPageItemGridProductProps> = (props) => {
  console.log(props);

  return (
    <Grid container columnSpacing={5}>
      <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="large">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartPageItemGridProduct;
