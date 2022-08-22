import axios from "axios";
import {
  getPopularGamesUrl,
  getUpcomingGamesUrl,
  getNewGamesUrl,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  const fetchPopularGames = await axios.get(getPopularGamesUrl());
  const fetchNewGames = await axios.get(getNewGamesUrl());
  const fetchUpcomingGames = await axios.get(getUpcomingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: fetchPopularGames.data.results,
      newGames: fetchNewGames.data.results,
      upcomingGames: fetchUpcomingGames.data.results,
    },
  });
};
