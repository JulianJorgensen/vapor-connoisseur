import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import styles from './styles/app.css';
import Main from './main';

import store from 'store';

// subscribe to the redux store
store.subscribe(() => {
  let state = store.getState();
  // console.log('New state', state);
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
