
import { call, put, takeEvery, all, takeLatest, select } from 'redux-saga/effects'
import { types, fetchUsersSuccess, fetchUsersFail, fetchPostsStart, fetchPostsSuccess, fetchPostsFail } from './actions'
import axios from 'axios';

function* loadUsers() {
  try {
    const res = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    if(res.status === 200) {
      yield put(fetchUsersSuccess(res.data))
    }
    else {
      yield put(fetchUsersFail())
    }
  } catch (error) {
    yield put(fetchUsersFail(error))
  }
}

/*
 * Selector. The query depends by the state shape
 */
export const getUserIdSelected = (state) => state.selectedUser ? state.selectedUser.id : ''

function* loadPosts() {

  try {
    yield put(fetchPostsStart())
    // const state = yield select()
    let userId = yield select(getUserIdSelected);
    //debugger;
    const res = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(res.status === 200) {
      yield put(fetchPostsSuccess(res.data))
    }
    else {
      yield put(fetchPostsFail())
    }
  } catch (error) {
    yield put(fetchPostsFail(error))
  }
}

function* watchLoadUsers() {
  yield takeEvery(types.FETCH_USERS_START, loadUsers)
}

function* watchSelectUser() {
  yield takeLatest(types.SELECT_USER, loadPosts)
}

export default function* rootSaga() {
  yield all([
    watchLoadUsers(),
    watchSelectUser()
  ])
}
