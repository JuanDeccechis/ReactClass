
import { combineReducers } from 'redux';

import auth from './auth'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

const rootReducer = combineReducers({
  auth, 
  visibilityFilter,
  todos
})

// Lo anterior es lo mismo que esto:
// const rootReducer = (state = {}, action) => {
//   return {
//     auth: auth(state.auth, action),
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }



export default rootReducer;
