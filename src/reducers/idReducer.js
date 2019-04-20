import { MOVIES } from "../constants";

const idReducer = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.REC_LOAD:
      return action.value;
    default:
      return state;
  }
};

export default idReducer;
