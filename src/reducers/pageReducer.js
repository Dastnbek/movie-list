import { MOVIES } from "../constants";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.LOAD:
      return action.value;
    case MOVIES.SEARCH_LOAD:
      return action.value;

    default:
      return state;
  }
};

export default pageReducer;
