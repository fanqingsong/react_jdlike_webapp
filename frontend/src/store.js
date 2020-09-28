/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import dataSourceMiddleware from "./modules/middleware";

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk, dataSourceMiddleware),
  ];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
}
