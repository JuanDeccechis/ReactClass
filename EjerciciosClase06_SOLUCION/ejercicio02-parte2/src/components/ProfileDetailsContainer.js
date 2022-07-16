import React, { Component } from "react";
import axios from "axios";
import ProfileDetails from "./ProfileDetails";

class ProfileDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/" + this.props.username)
      .then(result => {
        this.setState({
          user: result.data
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate, date:', new Date().toTimeString());
    if(prevProps.username !== this.props.username){
      axios.get("https://api.github.com/users/" + this.props.username).then(response => {
        this.setState({ user: response.data });
      })
    }
  }
  render() {
    const { user } = this.state;
    return (
      <div className="column">
        <h1> Detalles: </h1>
        {user
          ? <ProfileDetails
              name={user.name}
              blog={user.blog}
              email={user.email}
              followers={user.followers}
              following={user.following}
            />
          : <p> Cargando </p>}
      </div>
    );
  }
}

export default ProfileDetailsContainer;
