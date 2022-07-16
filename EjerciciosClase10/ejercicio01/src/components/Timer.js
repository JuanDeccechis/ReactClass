import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log('Start clicked')}>
          Start Timer
        </button>
        <div>
          Current Elapsed time is: COMPLETAR
        </div>
        <button onClick={() => console.log('Stop clicked')}>
          Stop Timer
        </button>
      </div>
    );
  }
}


export default Timer;