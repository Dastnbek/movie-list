import { MOVIES } from "../constants";
const errorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return null;
    case MOVIES.LOAD_FAIL:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
