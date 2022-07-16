import React, { Component } from "react";

const HighLightComponent = ComponentToDebug => {
  return class extends Component {
    render() {
      return (
        <div className="debug">
          <ComponentToDebug {...this.props} />
        </div>
      );
    }
  };
};

export default HighLightComponent;
