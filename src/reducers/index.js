import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movieReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import genreReducer from "./genreReducer";
//import recomendReducer from "./recomendReducer";
import idReducer from "./idReducer";
import queryReducer from "./queryReducer";
import searchReducer from "./searchReducer";
import countReducer from "./countReducer";
import singleReducer from "./singleReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  movies: movieReducer,
  movieid: idReducer,
  error: errorReducer,
  genres: genreReducer,
  currentpage: pageReducer,
  movieinfo: singleReducer,
  //recmovies: recomendReducer,
  searchquery: queryReducer,
  searchmovies: searchReducer,
  totalresults: countReducer,
  routing: routerReducer
});

export default rootReducer;
