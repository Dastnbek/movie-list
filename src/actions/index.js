import { MOVIES } from "../constants";
// main page movies
const loadMovies = page => ({
  type: MOVIES.LOAD,
  value: page
});

const setMovies = movies => ({
  type: MOVIES.LOAD_SUCCESS,
  movies
});
// recomended movies
const loadRecMovies = id => ({
  type: MOVIES.REC_LOAD,
  value: id
});

const setRecMovies = movies => ({
  type: MOVIES.REC_LOAD_SUCCESS,
  movies
});
//search results
const loadSearchMovies = id => ({
  type: MOVIES.SEARCH_LOAD,
  value: id
});
const setQuerySearch = query => ({
  type: MOVIES.SEARCH_LOAD + "a",
  value: query
});

const setSearchMovies = movies => ({
  type: MOVIES.SEARCH_SUCCESS,
  movies
});
// load genres
const loadGenre = () => ({
  type: MOVIES.GENRE_LOAD
});

const setGenres = genres => ({
  type: MOVIES.GENRE_SUCCESS + "_ASYNC",
  genres
});
// single movie info
const getaMovie = id => ({
  type: MOVIES.GETAMOVIE,
  value: id
});

const setaMovie = movie => ({
  type: MOVIES.SETAMOVIE,
  movie
});
const setErrorPopular = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

const setErrorAmovie = error => ({
  type: MOVIES.AMOVIE_FAIL,
  error
});

const clearState = () => ({
  type: MOVIES.CLEAR
});

export {
  loadMovies,
  setMovies,
  loadRecMovies,
  setRecMovies,
  loadSearchMovies,
  setQuerySearch,
  setSearchMovies,
  loadGenre,
  setGenres,
  getaMovie,
  setaMovie,
  clearState,
  setErrorPopular,
  setErrorAmovie
};
