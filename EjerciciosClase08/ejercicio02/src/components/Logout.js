import React, { Component } from "react";
import { connect } from 'react-redux';
import SystemInformation from "./SystemInformation";

class Logout extends Component {
  render() {
    return (
      <div>
      <SystemInformation username={this.props.username} age={this.props.age} />
      <button className="button" onClick={this.props.onHandleClick}>
        {" "}Logout{" "}
      </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    age: state.auth.age
  };
};


export default connect(mapStateToProps)(Logout);
