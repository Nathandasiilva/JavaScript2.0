import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//import './App.css';
import store, { persistor } from './store';
import history from './services/history';
import GloblaStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <routes history={history}>
          <Header />
          <Login />
          <GloblaStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
