import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
  const { username, handleClick, avatar, id } = props;
  return (
    <div id={id}>
      <div className="column">
        <img className="avatar" src={avatar} />
        <h2 className="username">{username}</h2>
      </div>
      <button
        className="reset"
        onClick={() => {
          handleClick(id)
        }}
      >
        Reset
      </button>
    </div>
  );
};

Profile.PropTypes

export default Profile;
