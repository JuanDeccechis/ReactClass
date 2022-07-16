import React from "react";
import Player from "./Player";
import { connect } from "react-redux";
import { fetchSelectedTeamPlayers } from "../actions";

class TeamSquad extends React.Component {
  render() {
    return (
      <div>
        <div className="players-container">
          <Player
            name={"COMPLETAR"}
            nationality={"COMPLETAR"}
            position={"COMPLETAR"}
          />
        </div>
      </div>
    );
  }
}

export default TeamSquad;
