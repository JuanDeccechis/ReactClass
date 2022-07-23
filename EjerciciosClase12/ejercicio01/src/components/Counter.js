import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../actions';

class Counter extends React.Component{
  render(){
    const { value, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return(
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onIncrementAsync: () => dispatch(incrementAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
