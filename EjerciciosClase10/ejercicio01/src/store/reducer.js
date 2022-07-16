import { types } from './actions'

const initialState = {
  startTime: 0,
  elapsed: 0,
  interval: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        startTime: action.payload.currentTime,
        elapsed: 0,
        interval: action.payload.interval
      };
    case types.TICK:
      return { 
        ...state,
        elapsed: action.currentTime - state.startTime 
      }
    case types.STOP_TIMER:
      return { 
        ...state,
        interval: null 
      };
  }
  return state;
};