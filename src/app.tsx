import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// all
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page/index';
import CartPage from './pages/cart-page';
import Product from './pages/product';
import Customers from './pages/customers';
import Salesforce from './pages/salesforce/salesforce-page';
import Resources from './pages/resources/resources-page';
// visitor
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';
// auth
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

import store from './store';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="products" element={<Product />} />
        <Route path="customers" element={<Customers />} />
        <Route path="salesforce" element={<Salesforce />} />
        <Route path="resources" element={<Resources />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  </ReduxProvider>
);

export default App;
