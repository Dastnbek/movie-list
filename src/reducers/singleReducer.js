import { MOVIES } from "../constants";

const singleReducer = (state = [], action) => {
  if (action.type === MOVIES.SETAMOVIE) {
    return { ...action.movie };
  } else if (action.type === MOVIES.GETAMOVIE) {
    return null;
  }
  return state;
};

export default singleReducer;
