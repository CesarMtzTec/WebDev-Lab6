import React from 'react';
import './App.css';
import ProductDetail from './containers/ProductDetail';
import NavBar from './components/NavBar';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ProductDetail />
    </React.Fragment>
  );
}

export default App;
