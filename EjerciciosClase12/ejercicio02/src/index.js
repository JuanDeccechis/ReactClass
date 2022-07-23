import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas' ;
//Creamos el middleware
const sagaMiddleware = createSagaMiddleware ()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    sagaMiddleware // nos permite dispatchear funciones
  ))
);
sagaMiddleware .run(rootSaga )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
