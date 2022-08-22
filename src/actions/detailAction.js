import axios from "axios";
import { getGameDetailUrl } from "../api";

const fetchGameDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(getGameDetailUrl(id));

  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      gameDetails: detailData.data,
    },
  });
};

export default fetchGameDetails;
