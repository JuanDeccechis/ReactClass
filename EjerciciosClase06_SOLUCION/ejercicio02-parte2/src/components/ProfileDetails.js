import React from "react";
import PropTypes from "prop-types";

const ProfileDetails = props => {
  return (
    <div>
      <p>Nombre: {props.name}</p>
      <p>Blog: {props.blog}</p>
      <p>Email: {props.email}</p>
      <p>Seguidores: {props.followers}</p>
      <p>Sigue a: {props.following}</p>
    </div>
  );
};

ProfileDetails.propTypes = {
  name: PropTypes.string,
  blog: PropTypes.string,
  email: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number
};

ProfileDetails.defaultProps = {
  label: "Username",
  placeholder: "placeholder..",
  name: "Nombre..",
  blog: "Sin blog",
  email: "Sin email"
};

export default ProfileDetails;
