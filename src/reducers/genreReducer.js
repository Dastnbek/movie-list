import { MOVIES } from "../constants";
const genreReducer = (state = [], action) => {
  if (action.type === MOVIES.GENRE_SUCCESS + "_ASYNC") {
    return [...action.genres.genres];
  }
  return state;
};

export default genreReducer;
