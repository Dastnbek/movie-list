import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movieReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import genreReducer from "./genreReducer";
import recomendReducer from "./recomendReducer";
import idReducer from "./idReducer";
import queryReducer from "./queryReducer";
import searchReducer from "./searchReducer";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  movies: movieReducer,
  movieid: idReducer,
  error: errorReducer,
  genres: genreReducer,
  currentpage: pageReducer,
  recmovies: recomendReducer,
  searchquery: queryReducer,
  searchmovies: searchReducer,
  totalresults: countReducer
});

export default rootReducer;
