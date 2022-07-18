import React, { Component } from "react";
import axios from "axios";
import ProfileDetailsPresentational from "./ProfileDetailsPresentational";

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
      <ProfileDetailsPresentational user={user} />  
    );
  }
}

export default ProfileDetails;
