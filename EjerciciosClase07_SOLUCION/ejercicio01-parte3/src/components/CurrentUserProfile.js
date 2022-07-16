import React from "react";
import PropTypes from "prop-types";

const CurrentUserProfile = props => {
  return (
    <div>
      <div>
        Current User: {props.username}
      </div>
      <div>
        Age: {props.age}
      </div>
    </div>
  );
};

CurrentUserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default CurrentUserProfile;
