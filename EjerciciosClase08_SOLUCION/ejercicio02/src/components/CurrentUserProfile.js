import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    age: state.auth.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserProfile);

