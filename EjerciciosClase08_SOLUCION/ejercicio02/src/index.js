import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginManager from "./LoginManager";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <LoginManager />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
