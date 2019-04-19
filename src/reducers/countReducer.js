import { MOVIES } from "../constants";
const countReducer = (state = [], action) => {
  if (
    action.type === MOVIES.LOAD_SUCCESS ||
    action.type === MOVIES.SEARCH_SUCCESS
  ) {
    let temp = action.movies.total_results;
    return temp;
  }
  return state;
};

export default countReducer;
