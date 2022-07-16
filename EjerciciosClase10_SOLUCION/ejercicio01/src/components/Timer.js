import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../store/actions';

class Timer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start}>
          Start Timer
        </button>
        <div>
          Current Elapsed time is: {this.props.elapsed}
        </div>
        <button onClick={this.props.stop}>
          Stop Timer
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elapsed: state.elapsed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(startTimer(Date.now())),
    stop: () => dispatch(stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);