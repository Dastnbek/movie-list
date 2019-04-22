import { MOVIES } from "../constants";
const countReducer = (state = [], action) => {
  if (
    action.type === MOVIES.LOAD_SUCCESS ||
    action.type === MOVIES.SEARCH_SUCCESS
  ) {
    let totalmovie = action.movies.total_results;
    return totalmovie;
  }
  return state;
};

export default countReducer;
