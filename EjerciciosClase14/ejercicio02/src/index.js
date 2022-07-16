import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import Login from "./Login";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Esto es para habilitar Redux Dev Tools

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
