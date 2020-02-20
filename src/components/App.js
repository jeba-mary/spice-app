import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <BrowserRouter>
          <Header />
          <div class="container-fluid">
            <Route exact path="/" component={HomePage} / >
            <Route path="/products/:id" component={ProductPage} />
          </div>
         
        </BrowserRouter>
      </div>
    )
  }
}

export default App;