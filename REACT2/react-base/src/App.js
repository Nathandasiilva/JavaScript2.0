import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

//import './App.css';
import history from './services/history';
import GloblaStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <routes history={history}>
        <Header />
        <Login />
        <GloblaStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </routes>
    </Provider>
  );
}

export default App;
