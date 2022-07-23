//En sagas.js
import { types, increment } from './actions'
import { delay } from 'redux-saga'
import { takeLatest, put, all } from 'redux-saga/effects'

// Iniciamos todas las sagas a la vez
export default function* rootSaga() {
    console.log('Hello Sagas!')
    yield all([
        watchIncrementAsync(),
    ])}
   

//WATCHER SAGA
function* watchIncrementAsync() {
    yield takeLatest(types.INCREMENT_ASYNC, incrementAsyncSaga)
}

//WORKER SAGA
function* incrementAsyncSaga() {
    console.log("saga inc async");
    yield delay(1000);
    yield put({type: types.INCREMENT});
}
