import { MOVIES } from "../constants";

const searchReducer = (state = [], action) => {
  if (action.type === MOVIES.SEARCH_SUCCESS) {
    return [...action.movies.results];
  }
  return state;
};

export default searchReducer;
