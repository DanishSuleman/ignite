const initialState = {
  gameDetail: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return { ...state, gameDetail: action.payload.gameDetails };
    default:
      return { ...state };
  }
};

export default detailReducer;
