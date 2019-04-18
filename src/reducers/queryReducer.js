import { MOVIES } from "../constants";

const queryReducer = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.SEARCH_LOAD:
      return action.value;
    default:
      return state;
  }
};

export default queryReducer;
