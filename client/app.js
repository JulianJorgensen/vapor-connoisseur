import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import store from 'store';
import Main from './main';
import './styles/app.css';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <Main />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('app'),
);
