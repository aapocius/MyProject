import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import BookList from '../../types/BookList';
import Img from '../../components/img';

type BookListCardProps = Omit<BookList, 'id'>;

const BooklistCard: React.FC<BookListCardProps> = ({
  img,
}) => (

  <Box
    sx={{
      display: { xs: 'block', sm: 'flex', lg: 'flex' },
      flexDirection: { lg: 'row' },
      height: { sm: 450, lg: '100%' },
      maxWidth: { sm: 530 },
      mx: { sm: 'auto' },
      // bgcolor: '#e5f3fb',
    }}
  >
    <Box
      sx={{
        height: { xs: 270, sm: '100%', lg: '100%' },
        width: { xs: '100%', sm: 300, lg: '100%' },
        flexBasis: 300,
        flexShrink: 0,
        alignSelf: 'stretch',
      }}
    >
      <Img src={img} sx={{ height: '100%', width: '100%' }} alt="" />
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
      p: 3,
      pt: 2,
    }}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'center', width: 200, gap: 1,
      }}
      >
        <Button variant="outlined" color="primary" sx={{ borderRadius: 1 }}>ADD BOOk</Button>
      </Box>
    </Box>
  </Box>
);

export default BooklistCard;
