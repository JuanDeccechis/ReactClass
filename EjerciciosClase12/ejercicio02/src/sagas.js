import axios from 'axios';

//En sagas.js
import { types, fetchUsersSuccess, fetchUsersFail, fetchPostsSuccess, fetchPostsFail } from './actions'
import { takeLatest, put, all, call } from 'redux-saga/effects'

// Iniciamos todas las sagas a la vez
export default function* rootSaga() {
    console.log('Hello Sagas!')
    yield all([
        watchFetchUsers(),
    ])}
   

//WATCHER SAGA
function* watchFetchUsers() {
    yield takeLatest(types.FETCH_USERS_START, fetchUsers),
    yield takeLatest(types.FETCH_POSTS_START, getPosts)
}

//WORKER SAGA
function* fetchUsers() {
    console.log("saga fetch users async");
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

function* getPosts(user) {
    console.log("saga get posts async");
    console.log(user.payload);
    try {
        const res = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?userId=${user.payload.id}`)
        if(res.status === 200){
            console.log(res.data);
            yield put(fetchPostsSuccess(res.data));
        }
        else 
            yield put(fetchPostsFail());
    } catch (error) {
        yield put(fetchPostsFail(error))
    }
}