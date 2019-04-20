import { MOVIES } from "../constants";

const singleReducer = (state = [], action) => {
  if (action.type === MOVIES.SETAMOVIE) {
    console.log(action.movie);
    return { ...action.movie };
  }
  return state;
};

export default singleReducer;
