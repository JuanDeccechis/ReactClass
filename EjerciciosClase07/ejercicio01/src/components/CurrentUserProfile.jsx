import React, { Component } from "react";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const { name, age } = this.props;
        return (
            <div>
                Current User: {name}
                Age: {age}
            </div>
        )
    }
}

export default Logout;