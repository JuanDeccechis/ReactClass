import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'

import rootReducer from './reducer';
import { types } from './actions'


const timerMiddleware = store => next => action => {
  // TODO COMPLETAR
  console.log(action.type);
  if (action.type === types.START_TIMER) {
    action.payload.interval = setInterval(() => store.dispatch({ type: types.TICK, payload: {currentTime: new Date()} }), 1000);
  }
  if (action.type === types.STOP_TIMER) {
    const state = store.getState();
    clearInterval(state.interval);
  }
  next(action);
};

const deaf = store => {
  let i = 0;
  return (next) => (action) => {
    if (!(i++%3)) {
        next(action);
    }
  }
}

const persist = (store) => (next) => (action) => {
  const retorno = next(action);
  const str = JSON.stringify({ data: store.getState() });
  window.localStorage.setItem("SAVESTATE", str);
  return retorno;
}

export const getStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const loggerMiddleware = createLogger();
  const savedstr = window.localStorage.getItem("SAVESTATE") || "{}";
  const initialstate = JSON.parse(savedstr).data;

  const store = createStore(
    rootReducer,
    /* INITIAL_STATE, */
    initialstate,
    composeEnhancers(applyMiddleware(deaf, timerMiddleware, loggerMiddleware, persist))
  );

  return store;
}