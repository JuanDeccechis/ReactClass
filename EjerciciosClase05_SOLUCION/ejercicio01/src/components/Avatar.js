import React from "react";
import PropTypes from "prop-types";

const Avatar = props => {
  return (
    <img className="Avatar" src={props.avatarUrl} alt={props.alt} />
  );
};

export default Avatar;

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Avatar.defaultProps = {
  alt: "Imagen sin nombre",
  avatarUrl: ""
};
