import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectShopError, selectShopItems, selectShopItemsLoading } from '../../store/selectors';
import { shopClearErrorAction, shopFetchItemsAction } from '../../store/action-creators';
import ShopPageCard from './shop-page-card';
import Questions from './questions-section';
import Customers from '../customers/index';

const ShopPage: React.FC = () => {
  const items = useRootSelector(selectShopItems);
  const itemsLoading = useRootSelector(selectShopItemsLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  console.table(items);

  if (!itemsLoading) {
    pageContent = items.length > 0 ? (
      <Grid container spacing={30}>
        {items.map((item) => (

          <Grid item key={item.id} xs={6}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Box sx={{ background: '#e5f3fb' }}>
      <Container>
        <Customers />
        {error && (
        <Alert color="error" onClose={() => dispatch(shopClearErrorAction)}>{error}</Alert>
        )}
        {pageContent}
        <Questions />
      </Container>
    </Box>
  );
};

export default ShopPage;
