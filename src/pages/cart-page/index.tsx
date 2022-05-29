import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';
import { cartFetchItemsAction } from '../../store/action-creators';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const itemsCount = useRootSelector(selectCartItemsCount);

  useEffect(() => {
    dispatch(cartFetchItemsAction);
  }, []);
  return (
    <Container>
      <Typography textAlign="center" component="h1" variant="h3" sx={{ my: 3, mb: 5 }}>Shopping Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : (
        <>
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>No items</Typography>
          <Button variant="outlined" sx={{ borderRadius: 1 }} onClick={() => navigate('/')}>Back to pricing</Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
