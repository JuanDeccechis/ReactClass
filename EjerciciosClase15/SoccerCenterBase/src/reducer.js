import { types } from "./actions";

const initialState = {
  loading: false,
  competitions: [],
  leagueTableId: '',
  leagueTable: {},
  selectedTeamId: 0,
  selectedTeamName: "",
  selectedTeamPlayers: [],
  fixtureId: '',
  fixtureMatches: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING_DATA:
      return { ...state, loading: action.payload };
    case types.FETCH_COMPETITIONS_SUCCESS:
      const competitions = [...action.payload.competitions];
      return {
        ...state,
        competitions: competitions
      };
    case types.LOAD_LEAGUE_TABLE_BY_ID: 
      /* TODO */
    case types.FETCH_LEAGUE_TABLE_SUCCESS:
      /* TODO */
    case types.SELECT_TEAM_ID:
      /* TODO */
    case types.FETCH_TEAM_PLAYERS_SUCCESS:
      /* TODO */
    default:
      return state;
  }
};
export default reducer;
