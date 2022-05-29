import React from 'react';
import {
  Box,
  Paper,
  Container,
  Typography,
  Button,
} from '@mui/material';

import { Item } from '../../../types';
// import Img from '../../../components/img';
import ShopPageCardProperties from './shop-page-card-properties';
import ShopPageCardActions from './shop-page-card-actions';
import toReadCase from '../../../helpers/to-read-case';
import Img from '../../../components/img';

type ShopPageCardProps = Item;

const ShopPageCard: React.FC<ShopPageCardProps> = ({
  id,
  title,
  img,
  info,
  about,
  price,
  amount,
  additionalProps = {},
}) => {
  const itemProperties = [
    ...Object.entries(additionalProps).map(([name, value]) => ({
      name: toReadCase(name),
      value,
    })),
  ];

  return (
    <Container>
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex', lg: 'flex' },
          flexDirection: { lg: 'row' },
          height: { sm: 450, lg: '100%' },
          maxWidth: { sm: 530 },
          mx: { sm: 'auto' },
          justifyContent: 'center',

        }}
      >
        <Box
          sx={{
            height: { xs: 270, sm: '100%', lg: '100%' },
            width: { xs: '100%', sm: 300, lg: '100%' },
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: -7,

          }}
        >
          <Img src={img} sx={{ height: '88%', width: '95%' }} alt="" />

        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 3,
        }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pb: 1,
          }}
          >
            {/* <Typography>{`${title}`}</Typography> */}
            <Typography variant="h5">{`${info}`}</Typography>
            <Typography>{`${about}`}</Typography>
            <Button variant="outlined" color="primary" sx={{ borderRadius: 1, width: 200, mt: 1 }}>TAKE ME TO THE BOOK</Button>
          </Box>
          <Box>
            <Typography fontSize="20px" variant="subtitle2" textAlign="center">
              {`Price: $${price}`}
            </Typography>
            <Box sx={{
              display: 'flex', justifyContent: 'center', flexDirection: 'column',
            }}
            >
              <ShopPageCardProperties properties={itemProperties} />
              <ShopPageCardActions
                id={id}
                inStock={amount}
              />
              <Typography
                textAlign="center"
                sx={{
                  color: 'gray', mt: -3, ml: -7, fontSize: 15,
                }}
              >
                {`pcs left: ${amount}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPageCard;
