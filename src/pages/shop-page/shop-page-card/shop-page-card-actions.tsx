import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

import NumberField from '../../../components/number-field';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { createModifyCartItemAction } from '../../../store/action-creators';
import { selectCartItemAmountByShopItemId } from '../../../store/selectors';
import theme from '../../../styles/theme';

type ShopPageCardActionsProps = {
  id: string,
  inStock: number,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  inStock,
}) => {
  const dispatch = useRootDispatch();
  const cartItemAmount = useRootSelector(selectCartItemAmountByShopItemId(id));
  const [amount, setAmount] = useState<number>(cartItemAmount);
  const available = inStock > 0 || cartItemAmount > 0;

  const addToCart = (): void => {
    const addToCartAction = createModifyCartItemAction(id, amount);
    dispatch(addToCartAction);
  };

  useEffect(() => {
    if (cartItemAmount !== amount) {
      addToCart();
    }
  }, [amount]);

  return (
    <Box>
      {!available && (<Typography color="error">Currently not available</Typography>)}
      <Box sx={{
        width: '59%',
        display: 'flex',
        ml: 5,
        gap: 0.5,
        mt: 2,
      }}
      >
        <NumberField
          size="small"
          sx={{ width: 80 }}
          InputProps={{ sx: { } }}
          disabled={!available}
          min={0}
          max={inStock + cartItemAmount}
          value={amount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
          fullWidth
        />
      </Box>
      <Box textAlign="center" mt="30px">
        {/* <Button
          sx={{ borderRadius: 1, background: 'linear-gradient(to right bottom, #33a3ca, #1f87a3, #106c7f, #07525d, #04393e);' }}
          variant="contained"
          // onClick={addToCart}
          disabled={!available}
        >
          <Typography sx={{ color: theme.palette.secondary.main, fontSize: 13 }}>Contact us</Typography>
        </Button> */}
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
