import storeReducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== "production") {
  //middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(
    storeReducer,
    undefined /*persistedState*/,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // TODO descomentar cuando haya alguna saga
  //sagaMiddleware.run(rootSaga)
  
  return store;
};



export default configureStore;
