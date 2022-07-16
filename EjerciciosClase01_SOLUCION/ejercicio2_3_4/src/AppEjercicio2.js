import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="avatar" />
        <h1>Name: {this.props.name}</h1>
        <h3>NickName: {this.props.nickName}</h3>
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
