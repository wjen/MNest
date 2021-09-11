import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import {
  HomePage,
  AboutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  CartPage,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import ProtectedRoute from './auth/ProtectedRoute';
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <AboutPage />
          </Route>
          <Route path='/cart' exact>
            <CartPage />
          </Route>
          <Route path='/products' exact>
            <ProductsPage />
          </Route>
          <Route path='/products/:id' exact children={<SingleProductPage />} />
          <PrivateRoute path='/checkout' exact>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
