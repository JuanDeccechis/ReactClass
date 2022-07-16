import React, { Component } from "react";

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

export default Logout;
