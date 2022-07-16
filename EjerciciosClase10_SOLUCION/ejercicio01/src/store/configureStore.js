import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'

import rootReducer from './reducer';


const timerMiddleware = store => next => action => {
  if (action.type === 'START_TIMER') {
    action.payload.interval = setInterval(() => store.dispatch({ type: 'TICK', currentTime: Date.now() }), 1000);
  } else if (action.type === 'STOP_TIMER') {
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

  const loggerMiddleware = createLogger();

  const savedstr = window.localStorage.getItem("SAVESTATE") || "{}";
  const initialstate = JSON.parse(savedstr).data;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialstate,
    composeEnhancers(
      applyMiddleware(deaf, timerMiddleware, loggerMiddleware, persist)
    )
  );

  return store;
}