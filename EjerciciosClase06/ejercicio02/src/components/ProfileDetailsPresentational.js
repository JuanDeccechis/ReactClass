import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileDetailsPresentational extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { user } = this.props;
    return (
      <div className="column">
        <h1> Detalles: </h1>
        {user ? 
          <div>
            <p>Nombre: {user.name}</p>
            <p>Blog: {user.blog}</p>
            <p>Email: {user.email}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Sigue a: {user.following}</p>
          </div>
        : 
          <p> Cargando </p>
        }
      </div>
    );
  }
}

ProfileDetailsPresentational.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
};

ProfileDetailsPresentational.defaultProps = {
  user: PropTypes.shape({
    label: "Username",
    placeholder: "placeholder..",
    name: "Nombre..",
    blog: "Sin blog",
    email: "Sin email"
  })
};

export default ProfileDetailsPresentational;
