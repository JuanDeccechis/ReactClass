import { delay } from 'redux-saga'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { types, increment } from './actions'


function* incrementAsync() {
  yield call(delay, 1000)
  yield put(increment())
}

function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync)
}



function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}