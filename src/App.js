import React from 'react';
import './App.css';
import Header from './common/header/index';
import Home from './pages/home/index';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
