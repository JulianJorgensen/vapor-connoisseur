import * as redux from 'redux';
import { reducer as formReducer } from 'redux-form';

import { createClientMiddleware } from './utils';
import { siteReducer } from './site/reducer';

import { shopReducer } from './shop/reducer';
import { shopifyClient } from './shop/clients';

const store = (initialState = {}) => {
  const reducer = redux.combineReducers({
    site: siteReducer,
    shop: shopReducer,
    form: formReducer,
  });

  const createStore = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(createClientMiddleware(shopifyClient)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return createStore;
};

export default store();
