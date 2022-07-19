import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className="home-container">
                <h1>title</h1>
                <Link className="button" to="/githubProfiles"> show Profiles</Link> 
            </div>
        )
    }
}

export default Home;