import React from "react";
import propTypes from "prop-types";
import "../App.css";

function Avatar(props) {
    return (
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
  };

  Avatar.defaultProps = {user: {  alt: "Imagen sin nombre", avatarUrl: ""}}
  Avatar.propTypes = {user: propTypes.object.isRequired}

  export default Avatar;