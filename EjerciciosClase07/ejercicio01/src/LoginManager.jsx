import React, { Component } from "react";
import App from './App';

class LoginManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false,
            name: "",
            age: 0
        }
    }

    handleLogin = () => {
        this.setState({ isLogged: true });
    }

    handleLogout = () => {
        this.setState({ isLogged: false, name: "", age: 0 });
    }

    handleChange = (event) => {
        console.log("change");
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        const { isLogged, name, age } = this.state;
        return(
            <div>
                {isLogged ? 
                    <App name={name} age={age} handleLogout={this.handleLogout} />
                :
                    <div>
                        <h1>Bienvenido a la app</h1>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" placeholder="nombre" onChange={this.handleChange}/>
                        <label htmlFor="age">Edad: </label>
                        <input type="number" name="age" placeholder="edad" onChange={this.handleChange}/>
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                }
            </div>
        )
    }

}

export default LoginManager;