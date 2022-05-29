import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Badge,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectCartItemsCount, selectLoggedIn } from '../../store/selectors';
import Logo from '../../components/logo';
import Products from '../../pages/product/index';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectLoggedIn);
  const cartItemsCount = useRootSelector(selectCartItemsCount);

  return (
    <AppBar position="sticky" sx={{ userSelect: 'none', bgcolor: 'grey.900' }}>
      <Container sx={{ px: { xs: 0, sm: 0 } }}>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-between',
        }}
        >
          <Typography display="flex" alignItems="center" component="h1" variant="h5">
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
            <Typography ml="30px">
              <NavbarLink to="/">Home</NavbarLink>
            </Typography>
          </Typography>
          <Box sx={{ alignSelf: 'stretch' }} />
          <Box sx={{ fontSize: 13, pl: 30 }}>
            {/* <NavbarLink to="/products"><Products /></NavbarLink> */}

          </Box>
          {/* <Typography>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Typography> */}
          <Box>
            <NavbarLink to="/cart">
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCartIcon sx={{ fontSize: 25 }} />
              </Badge>
            </NavbarLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
