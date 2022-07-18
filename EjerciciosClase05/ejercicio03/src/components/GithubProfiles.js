import React, { Component } from "react";
import Profile from "./Profile";
import InputForm from "./InputForm";

class GithubProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileOne: { avatar: "", username: "" },
      profileTwo: { avatar: "", username: "" }
    };
  }
  handleSubmit = (id, username) => {
    //La imagen del perfil de Github la pueden sacar de la siguiente forma:
    //"https://github.com/" + username + ".png?size=200";
    let newProfile = { avatar: "https://github.com/" + username + ".png?size=200", username: username };
    this.setState({ [id]: newProfile });
  }

  handleReset = (id) => {
    const emptyProfile = { avatar: "", username: "" };
    this.setState({ [id]: emptyProfile });
  }

  render() {
    const { profileOne, profileTwo } = this.state;
    return (
      <div>
        <div className="row">
          {!profileOne.username ? 
            <InputForm
              id="profileOne"
              label="Profile One"
              placeholder="Enter a github username"
              onSubmit={this.handleSubmit}
            />
          :
            <Profile avatar={profileOne.avatar} username={profileOne.username} id="profileOne" handleClick={this.handleReset} />
          }
          {!profileTwo.username ? 
            <InputForm
              id="profileTwo"
              label="Profile Two"
              placeholder="Enter a github username"
              onSubmit={this.handleSubmit}
            />
          :
            <Profile avatar={profileTwo.avatar} username={profileTwo.username} id="profileTwo" handleClick={this.handleReset} />
          }
        </div>
      </div>
    );
  }
}

export default GithubProfiles;
