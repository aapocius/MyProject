import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import theme from '../../styles/theme';

const Salesforce: React.FC = () => (
  <Container sx={{
    mt: 5, textAlign: 'center', background: '#65c6ec', py: 5, borderRadius: 5,
  }}
  >
    <Typography component="h1" variant="h3" sx={{ color: 'white' }}>
      The only conversational
      {' '}
      <br />
      {' '}
      sales and marketing platform
    </Typography>
    <Typography component="h1" variant="h3">
      purpose-built for Salesforce
    </Typography>
    <Typography component="h2" variant="h5" sx={{ mt: 5, color: 'white' }}>
      Qualified accelerates lead generation, pipeline, and
      {' '}
      <br />
      {' '}
      revenue for sales and marketing teams worldwide.
    </Typography>

    <Box display="flex" justifyContent="center" sx={{ m: 2, pt: 3 }}>

      <Button
        size="large"
        sx={{
          m: 1,
          color: theme.palette.primary.main,
          borderRadius: 1,
          background: theme.palette.secondary.main,
          height: '60px',
          ':hover': { bgcolor: '#e2eff1' },
        }}
        variant="contained"
      >
        get started
      </Button>

      <Button
        startIcon={<PlayArrowIcon />}
        sx={{
          m: 1,
          px: 2,
          color: theme.palette.secondary.main,
          border: '1px solid white',
          borderRadius: 1,
          ':hover': { bgcolor: theme.palette.secondary.main, color: theme.palette.primary.main },
        }}
      >
        watch a demo
      </Button>

    </Box>
  </Container>
);

export default Salesforce;
