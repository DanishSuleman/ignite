import gamesReducer from "./gamesReducer";
import { combineReducers } from "redux";
import detailReducer from "./detailReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  gameDetails: detailReducer,
});

export default rootReducers;
