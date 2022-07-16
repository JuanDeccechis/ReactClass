

export const types = {
  TOGGLE_LOADING_DATA: "TOGGLE_LOADING_DATA",
  GET_COMPETITIONS_LIST: "GET_COMPETITIONS_LIST",
  FETCH_COMPETITIONS_SUCCESS: "FETCH_COMPETITIONS_SUCCESS",
  FETCH_COMPETITIONS_ERROR: "FETCH_COMPETITIONS_ERROR",
  LOAD_LEAGUE_TABLE_BY_ID: "LOAD_LEAGUE_TABLE_BY_ID",
  FETCH_LEAGUE_TABLE_SUCCESS: "FETCH_LEAGUE_TABLE_SUCCESS",
  FETCH_LEAGUE_TABLE_FAILURE: "FETCH_LEAGUE_TABLE_FAILURE",
  SELECT_TEAM_ID: "SELECT_TEAM_ID",
  FETCH_TEAM_PLAYERS_SUCCESS: "FETCH_TEAM_PLAYERS_SUCCESS",
  FETCH_TEAM_PLAYERS_FAILURE: "FETCH_TEAM_PLAYERS_FAILURE",
  LOAD_FIXTURE_BY_ID: "LOAD_FIXTURE_BY_ID",
  FETCH_FIXTURE_SUCCESS: "FETCH_FIXTURE_SUCCESS",
  FETCH_FIXTURE_FAILURE: "FETCH_FIXTURE_FAILURE"
};

//actions creators
export const toggleLoadingData = flag => {
  return {
    type: types.TOGGLE_LOADING_DATA,
    payload: flag
  };
};

export const getCompetitionsSuccess = competitions => {
  return {
    type: types.FETCH_COMPETITIONS_SUCCESS,
    payload: { competitions: competitions }
  };
};

export const getCompetitionsFailure = error => {
  return {
    type: types.FETCH_COMPETITIONS_ERROR,
    payload: { error: error }
  };
};

export const receiveTableLeague = leagueTable => {
  return {
    type: types.FETCH_LEAGUE_TABLE_SUCCESS,
    payload: { leagueTable: leagueTable }
  };
};

export const receiveTableLeagueFailure = error => {
  return {
    type: types.FETCH_LEAGUE_TABLE_FAILURE,
    payload: { error: error }
  };
};

export const selectTeamId = (id, name) => {
  return {
    type: types.SELECT_TEAM_ID,
    payload: { id: id, name: name }
  };
};

export const receiveTeamPlayers = players => {
  return {
    type: types.FETCH_TEAM_PLAYERS_SUCCESS,
    payload: { players: players }
  };
};

export const receiveTeamPlayersFailure = error => {
  return {
    type: types.FETCH_TEAM_PLAYERS_FAILURE,
    payload: { error: error }
  };
};

export const getCompetitions = () => {
  return {
    type: types.GET_COMPETITIONS_LIST
  };
}

export const loadLeagueTableById = id => {
  return {
    type: types.LOAD_LEAGUE_TABLE_BY_ID,
    payload: { id }
  };
};

export const loadFixtureById = id => {
  return {
    type: types.LOAD_FIXTURE_BY_ID,
    payload: { id }
  };
}

export const receiveFixture = fixtures => {
  return {
    type: types.FETCH_FIXTURE_SUCCESS,
    payload: { fixtures: fixtures }
  };
};

export const receiveFixtureFailure = error => {
  return {
    type: types.FETCH_FIXTURE_FAILURE,
    payload: { error: error }
  };
};
