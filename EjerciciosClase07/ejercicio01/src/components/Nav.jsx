import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <ul className="nav">
                <li><NavLink exact={"true"} activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink activeclassname="active" to="/githubProfiles">GithubProfiles</NavLink></li>
                <li><NavLink activeclassname="active" to="/logout">Logout</NavLink></li>
            </ul>
        )
    }
}

export default Nav;