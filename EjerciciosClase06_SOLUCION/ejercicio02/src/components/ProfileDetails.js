import React, { Component } from "react";
import axios from "axios";

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    axios.get("https://api.github.com/users/" + this.state.username).then(response => {
      this.setState({ user: response.data });
    });  
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

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate, date:', new Date().toTimeString());
    if(prevProps.username !== this.props.username){
      axios.get("https://api.github.com/users/" + this.props.username).then(response => {
        this.setState({ user: response.data });
      })
    }
  }
}

export default ProfileDetails;
