import React from 'react';
import { Router } from 'react-router-dom';

//import './App.css';
import history from './services/history';
import GloblaStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <routes history={history}>
      <Header />
      <Login />
      <GloblaStyle />
    </routes>
  );
}

export default App;
