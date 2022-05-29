import {
  Paper, Box, Typography, Slide,
} from '@mui/material';
import React from 'react';
import ProductHoverFn from '../product/product-hover-fn';

const icon = (
  <Paper sx={{ display: 'flex', justifyContent: 'center' }}>
    <ProductHoverFn />
  </Paper>
);

const Recource:React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{
      mt: 2,
      textAlign: 'center',

    }}
    >
      <Typography onClick={handleChange}>Recource</Typography>
      <Slide direction="right" in={checked} container={containerRef.current}>
        {icon}
      </Slide>
    </Box>

  );
};
export default Recource;
