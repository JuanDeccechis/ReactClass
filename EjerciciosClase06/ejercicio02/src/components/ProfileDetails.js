import React, { Component } from "react";
import axios from "axios";

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div className="column">
        <h1> Detalles: </h1>
        {user
          ? <div>
              <p>Nombre: {user.name}</p>
              <p>Blog: {user.blog}</p>
              <p>Email: {user.email}</p>
              <p>Seguidores: {user.followers}</p>
              <p>Sigue a: {user.following}</p>
            </div>
          : <p> Cargando </p>}
      </div>
    );
  }
}

export default ProfileDetails;
