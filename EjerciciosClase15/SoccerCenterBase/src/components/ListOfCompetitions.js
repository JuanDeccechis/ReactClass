import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCompetitions } from "../actions.js";

import Loader from "./Loader";

class ListOfCompetitions extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCompetitions();
  }

  render() {
    return (
      <div className="competition-list-container">
        <p className="competition-list-title">Available Competitions</p>
        {this.props.loading
          ? <Loader />
          : <ul>
              {this.props.competitions.map((competition, index) => {
                return (
                  <li key={index}>
                    <div className="competition-container">
                      <div className="competition-title">
                        {competition.caption} COMPLETAR Titulo de cada
                        competicion..
                      </div>
                      <div>
                        Teams: *Numero de equipos*
                      </div>
                      <div>
                        Progress in matches:{" "}
                      </div>
                      <div className="competition-date">
                        Last updated:{" "}
                      </div>
                      <div>
                        <Link
                          to={`/competition/${competition.id}`}
                          className="button"
                        >
                          See positions table
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompetitions: () => {
      return dispatch(getCompetitions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCompetitions);
