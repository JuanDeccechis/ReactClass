import React, { Component } from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div>
                <p>Se accedió a una ruta erronea</p>
            </div>
        )
    }
}

export default NotFound;