import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
  return (
    <div>
      <div className="column">
        <img
          className="avatar"
          src={props.avatar}
          alt={"Avatar for " + props.username}
        />
        <h2 className="username">@{props.username}</h2>
        <button
          className="reset"
          onClick={() => {
            props.onReset(props.id);
          }}
        >
          Reset
        </button>
      </div>

    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Profile;
