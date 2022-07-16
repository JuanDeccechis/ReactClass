import React, { Component } from "react";
import Profile from "./Profile";
import InputForm from "./InputForm";

class GithubProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(id, username) {
    //La imagen del perfil de Github la pueden sacar de la siguiente forma:
    //"https://github.com/" + username + ".png?size=200";
  }
  handleReset(id) {}
  render() {
    return (
      <div>
        <div className="row">

          <InputForm
            id="profileOne"
            label="Profile One"
            placeholder="Enter a github username"
          />

          <Profile avatar={""} username={""} id="profileOne" />

          <InputForm
            id="profileTwo"
            label="Profile Two"
            placeholder="Enter a github username"
          />

          <Profile avatar={""} username={""} id="profileTwo" />
        </div>
      </div>
    );
  }
}

export default GithubProfiles;
