import React from "react";
import PropTypes from "prop-types";
import CurrentUserProfile from "./CurrentUserProfile";

const SystemInformation = props => {
  return (
    <div style={{ textAlign: 'center'}}> 
      <div>
        Current Time: {(new Date()).toLocaleDateString()}
      </div>
      <CurrentUserProfile />
    </div>
  );
};

export default SystemInformation;
