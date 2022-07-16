import React from "react";
import UserInfo from "./UserInfo.js";
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

  export default Comment;