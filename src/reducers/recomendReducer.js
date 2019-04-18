import { MOVIES } from "../constants";

const recomendReducer = (state = [], action) => {
  if (action.type === MOVIES.REC_LOAD_SUCCESS) {
    return [...action.movies.results];
  }
  return state;
};

export default recomendReducer;
