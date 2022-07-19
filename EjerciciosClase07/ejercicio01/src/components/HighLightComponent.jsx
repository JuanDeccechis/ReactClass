import React, { Component } from "react";

let HighLightComponent = ComponentToDebug => {
    return class extends Component {
      render() {
        return (
          <div className="debug">
            <ComponentToDebug {...this.props}/>
          </div>
        );
      }
    };
}

export default HighLightComponent;
   