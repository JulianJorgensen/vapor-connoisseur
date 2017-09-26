import * as redux from 'redux';
import thunk from 'redux-thunk';

import { createClientMiddleware } from './utils';
import { siteReducer } from './site/reducer';

import { shopReducer } from './shop/reducer';
import { shopifyClient } from './shop/clients';

export const store = (initialState = {}) => {
  let reducer = redux.combineReducers({
    site: siteReducer,
    shop: shopReducer
  });

  let createStore = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(createClientMiddleware(shopifyClient)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return createStore;
};

export default store();
