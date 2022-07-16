import axios from "./config";

export const getCompetitions = () => {
  return axios
    .get("/competitions/")
    .then(response => {
      if (response.status === 200 && response.data) {
        return { success: true, competitions: response.data };
      }
    })
    .catch(err => {
      console.log(err);
      alert("error while loading user data");
      return { success: false };
    });
};

export const getLeagueTableById = id => {
  /*  COMPLETAR */
  //axios.get(`/competitions/${id}/leagueTable`)
};

export const getTeamPlayers = id => {
  /*  COMPLETAR */
  //axios.get(`/teams/${id}/players`)
};