import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import {
  HomePage,
  AboutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
} from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/products' exact component={ProductsPage} />
        <Route path='/products/:id' exact component={SingleProductPage} />
        <Route path='*' exact component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
