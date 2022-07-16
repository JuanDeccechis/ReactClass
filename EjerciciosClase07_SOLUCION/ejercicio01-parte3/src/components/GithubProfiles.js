import React, { Component } from "react";
import Profile from "./Profile";
import InputForm from "./InputForm";

class GithubProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileOneUserName: "",
      profileTwoUserName: "",
      profileOneImage: null,
      profileTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    //"https://github.com/" + username + ".png?size=200";

    let newState = {};
    newState[id + "UserName"] = username;
    newState[id + "Image"] = "https://github.com/" + username + ".png?size=200";

    this.setState(newState);
  }
  handleReset(id) {
    let newState = {};
    newState[id + "UserName"] = "";
    newState[id + "Image"] = null;
    this.setState(newState);
  }
  render() {
    const profileOneUserName = this.state.profileOneUserName;
    const profileOneImage = this.state.profileOneImage;
    const profileTwoUserName = this.state.profileTwoUserName;
    const profileTwoImage = this.state.profileTwoImage;

    return (
      <div>
        <div className="row">
          {!profileOneUserName &&
            <InputForm
              id="profileOne"
              label="Profile One"
              placeholder="Enter a github username"
              onSubmit={this.handleSubmit}
            />}

          {profileOneImage !== null &&
            <Profile
              avatar={profileOneImage}
              username={profileOneUserName}
              onReset={this.handleReset}
              id="profileOne"
            />}

          {!profileTwoUserName &&
            <InputForm
              id="profileTwo"
              label="Profile Two"
              placeholder="Enter a github username"
              onSubmit={this.handleSubmit}
            />}

          {profileTwoImage !== null &&
            <Profile
              avatar={profileTwoImage}
              username={profileTwoUserName}
              onReset={this.handleReset}
              id="profileTwo"
            />}
        </div>
      </div>
    );
  }
}

export default GithubProfiles;
