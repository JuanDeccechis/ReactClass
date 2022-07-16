import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Avatar extends React.Component {
  render() {
    return <img src={this.props.image} alt="avatar" />;
  }
}

class Name extends React.Component {
  render() {
    return <h1>Name: {this.props.name}</h1>;
  }
}

function NickName(props) {
  return <h3>NickName: {props.nickName}</h3>;
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar image={this.props.image} />
        <Name name={this.props.name} />
        <NickName nickName={this.props.nickName} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    var user = {
      name: "Luis Suarez",
      nickName: "Pistolero",
      img:
        "http://cdne.elbocon.pe/thumbs/uploads/img/2017/03/30/luis-suarez-y-su-gran-gesto-jpg_900x0.jpg"
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Badge image={user.img} name={user.name} nickName={user.nickName} />
        </div>
      </div>
    );
  }
}

export default App;
