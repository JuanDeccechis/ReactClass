import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";

const UserInfo = props => {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.user.avatarUrl} alt={props.user.name} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  }).isRequired
};

UserInfo.defaultProps = {
  user: {
    name: "Sin nombre",
    avatarUrl: ""
  }
};
