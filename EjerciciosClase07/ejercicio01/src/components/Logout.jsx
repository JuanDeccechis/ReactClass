import React, { Component } from "react";
import SystemInformation from './SystemInformation';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const { name, age } = this.props;
        console.log("logout");
        console.log(name);
        console.log(age);
        return (
            <div>
                <SystemInformation name={name} age={age} />
                <button onClick={() => this.props.onHandleClick()}> Logout</button> 
            </div>
        )
    }
}

export default Logout;