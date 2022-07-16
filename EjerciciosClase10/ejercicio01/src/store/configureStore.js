import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducer';


const timerMiddleware = store => next => action => {
  // TODO COMPLETAR

  
  next(action);
};

export const getStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    /* INITIAL_STATE, */
    composeEnhancers(applyMiddleware(timerMiddleware))
  );

  return store;
}