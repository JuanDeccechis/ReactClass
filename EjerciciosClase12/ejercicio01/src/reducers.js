
import { types } from './actions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      console.log("inc");
      return state + 1
    case types.DECREMENT:
      return state - 1
    default:
      return state
  }
}