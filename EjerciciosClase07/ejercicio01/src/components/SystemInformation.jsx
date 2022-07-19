import React, { Component } from "react";
import CurrentUserProfile from './CurrentUserProfile';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleDateString()
        };
    }

    render(){
        const { currentTime } = this.state;
        const { name, age } = this.props;
        console.log("System");
        console.log(name);
        console.log(age);
        return (
            <div>
                Current time: {currentTime}
                <CurrentUserProfile name={name} age={age} />
            </div>
        )
    }
}

export default Logout;