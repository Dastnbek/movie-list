import { MOVIES } from "../constants";
const movieReducer = (state = [], action) => {
  if (action.type === MOVIES.LOAD_SUCCESS) {
    return [...action.movies.results];
  }
  return state;
};

export default movieReducer;
