import { MOVIES } from "../constants";
const genreReducer = (state = [], action) => {
  if (action.type === MOVIES.GENRE + "_ASYNC") {
    return { ...action };
  }
  return state;
};

export default genreReducer;
