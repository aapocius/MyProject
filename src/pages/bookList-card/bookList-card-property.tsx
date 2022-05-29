import React from 'react';
import { Box, Typography } from '@mui/material';

type BookListCardPropertyProps = {
  name: string,
  value: string,
};
const BookListCardProperty: React.FC<BookListCardPropertyProps> = ({ name, value }) => (
  <Box>
    <Typography variant="h6">{name}</Typography>
    <Typography sx={{ pl: 2 }}>{value}</Typography>
  </Box>
);

export default BookListCardProperty;
