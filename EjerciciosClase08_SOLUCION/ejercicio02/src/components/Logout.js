import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions.js";
import SystemInformation from "./SystemInformation";
import { Link } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <div>
        <SystemInformation />
        <Link to="/">
          <button className="button" onClick={this.props.logoutLocal}>
            {" "}Logout{" "}
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logoutLocal: () => {
      return dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
