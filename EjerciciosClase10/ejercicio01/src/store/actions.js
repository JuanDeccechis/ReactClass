
export const types = {
  START_TIMER: 'START_TIMER',
  TICK: 'TICK',
  STOP_TIMER: 'STOP_TIMER'
}

export const startTimer = (currentTime) => {
  console.log(currentTime)
  return {
    type: types.START_TIMER,
    payload: { currentTime: currentTime }
  }
}

export const tick = (currentTime) => {
  console.log(currentTime)
  return {
    type: types.TICK,
    payload: { currentTime }
  }
}

export const stopTimer = () => {
  return {
    type: types.STOP_TIMER
  }
}