import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movieReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  movies: movieReducer,
  error: errorReducer,
  currentpage: pageReducer
});

export default rootReducer;
