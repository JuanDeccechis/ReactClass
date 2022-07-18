import React from "react";
import UserInfo from "./UserInfo.js";
import propTypes from "prop-types";
import "../App.css";

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Comment(props) {
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
  }

  Comment.propTypes = {
    comment: propTypes.shape({
      author: propTypes.object.isRequired,
      text: propTypes.string.isRequired,
      date: propTypes.instanceOf(Date).isRequired
    }).isRequired
  }
  export default Comment;