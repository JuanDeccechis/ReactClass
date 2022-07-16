import React from "react";
import UserInfo from "./UserInfo";
import PropTypes from "prop-types";
import { formatDate } from '../helpers'

const Comment = props => {
  return (
    <div className="Comment">
      <UserInfo user={props.comment.author} />
      <div className="Comment-text">
        {props.comment.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.comment.date)}
      </div>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};
