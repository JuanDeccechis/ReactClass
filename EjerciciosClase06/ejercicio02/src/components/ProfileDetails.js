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
    this.getGithubUserData();
  }

  getGithubUserData = () => {
    axios.get(`https://api.github.com/users/${this.props.username}`)
    .then((response) => {
      console.log(response.data)
      this.setState({ user: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    if ((nextState.user !== this.state.user) || (nextProps.username !== this.props.username)) {
      console.log("update");
      return true;
    } else {
      console.log("doesn't update");
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.getGithubUserData();
      console.log("did update")
    }
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
