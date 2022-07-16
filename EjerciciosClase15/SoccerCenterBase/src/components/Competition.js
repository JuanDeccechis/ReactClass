import React from "react";

import { connect } from "react-redux";
import { loadLeagueTableById } from "../actions.js";

import PosTable from "./PosTable";
import TeamSquad from "./TeamSquad";
import Loader from "./Loader";

class Competition extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log("id de competicion es: " + id);
    }
  }
  render() {
    return (
      <div>

        <div>
          <p className="competition-list-title">
            Tabla de COMPLETAR
          </p>
          <PosTable teams={[]} />

        </div>
      </div>
    );
  }
}

export default Competition;
