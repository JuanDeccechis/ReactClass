import { combineReducers } from 'redux'
import authReducer from './authReducer'
import filterReducer from './filterReducer'
import todosReducer from './todosReducer'

export default combineReducers({
    auth: authReducer, 
    filter: filterReducer, 
    todos: todosReducer 
})
