import React from "react";
import Avatar from "./Avatar.js";
import propTypes from 'prop-types';
import "../App.css";

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  UserInfo.propTypes = {
    user: propTypes.shape({
      name: propTypes.string.isRequired,
      avatarUrl: propTypes.string.isRequired
    }).isRequired
  };
  
  UserInfo.defaultProps = {
    user: {
      name: "Sin nombre",
      avatarUrl: ""
    }
  };
  
export default UserInfo;