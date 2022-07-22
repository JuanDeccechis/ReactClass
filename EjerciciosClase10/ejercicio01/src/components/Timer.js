import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, tick, stopTimer } from '../store/actions';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }

  handleStartTimer = () => {
    this.props.startTimerLocal(new Date());
//    this.interval = setInterval(() => this.tick(new Date()), 1000);
  }

  tick = (time) => {
    this.props.tickLocal(time);
  }

  handleStopTimer = () => {
  //  clearInterval(this.interval);
    this.props.stopTimerLocal();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleStartTimer()}>
          Start Timer
        </button>
        <div>
          Current Elapsed time is: {this.props.time }
        </div>
        <button onClick={() => this.handleStopTimer()}>
          Stop Timer
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.elapsed
})
const mapDispatchToProps = (dispatch) => ({
  startTimerLocal: time => dispatch(startTimer(time)),
  tickLocal: time => dispatch(tick(time)),
  stopTimerLocal : () => dispatch(stopTimer())
})
 

export default connect(mapStateToProps, mapDispatchToProps) (Timer);