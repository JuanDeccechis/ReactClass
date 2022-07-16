import React, { Component } from "react";
import "./App.css";

class Users extends Component {
  render() {
    //Puedo crear una variable antes, o filtrar despues, las dos opciones son validas
    const friends = this.props.list.filter(person => {
      return person.friend === true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((friend, index) => {
            return (
              <li key={index}>
                {friend.name}
              </li>
            );
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list
            .filter(person => {
              return person.friend !== true;
            })
            .map((nonFriend, index) => {
              return (
                <li key={index}>
                  {nonFriend.name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Users
          list={[
            { name: "Juan", friend: true },
            { name: "Pedro", friend: false },
            { name: "Maria", friend: false },
            { name: "Lucia", friend: false },
            { name: "Raul", friend: true },
            { name: "Monica", friend: true }
          ]}
        />
      </div>
    );
  }
}

export default App;
