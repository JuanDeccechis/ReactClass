import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
  return (
    <div>
      <div className="column">
        <img className="avatar" />
        <h2 className="username">@COMPLETAR</h2>
      </div>
      <button
        className="reset"
        onClick={() => {
          alert("click en reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Profile;
