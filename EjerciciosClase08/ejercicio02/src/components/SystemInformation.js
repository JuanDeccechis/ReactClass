import React from "react";
import PropTypes from "prop-types";
import CurrentUserProfile from "./CurrentUserProfile";

const SystemInformation = props => {
  return (
    <div style={{ textAlign: 'center'}}> 
      <div>
        Current Time: {(new Date()).toLocaleDateString()}
      </div>
      <CurrentUserProfile username={props.username} age={props.age}/>
    </div>
  );
};

SystemInformation.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default SystemInformation;
