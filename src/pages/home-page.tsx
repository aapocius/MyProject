import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, Typography, Grid, Box,
} from '@mui/material';
import BookList from '../types/BookList';
import BookListCard from './bookList-card';

const HomePage: React.FC = () => {
  const [bookList, setBookList] = useState<BookList[]>([]);

  useEffect(() => {
    axios.get<BookList[]>('http://localhost:8000/users')
      .then(({ data }) => setBookList(data))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);

  return (
    <Box sx={{ background: '#e5f3fb' }}>

      <Container>

        <Typography component="h1" variant="h3" sx={{ textAlign: 'center', mb: 5, pt: 10 }}>
          {bookList.length === 0 ? 'Nothing to show' : 'Admin Page'}
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
        >
          {bookList.map(({ id, ...bookListProps }) => (
            <Grid key={id}>
              <BookListCard {...bookListProps} />
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
