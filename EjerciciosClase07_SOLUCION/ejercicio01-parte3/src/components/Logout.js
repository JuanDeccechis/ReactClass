import React, { Component } from "react";
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

export default Logout;
