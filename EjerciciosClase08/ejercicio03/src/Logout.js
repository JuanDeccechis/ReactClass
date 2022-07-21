import React, { Component } from "react";
import { connect } from 'react-redux';
import { logout } from './actions';

class Logout extends Component {
  render() {
    return (
      <div>
      <button className="button" onClick={this.props.onHandleClick}>
        {" "}Logout{" "}
      </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleClick: () => {
      return dispatch(logout());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Logout);
