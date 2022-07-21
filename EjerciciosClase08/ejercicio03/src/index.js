import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginManager from "./LoginManager";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./combineReducer"

let store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
//Esto es para habilitar Redux Dev Tools

ReactDOM.render(
  <Provider store={store}>
    <LoginManager />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
