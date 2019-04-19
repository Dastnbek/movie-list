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
const setQuerySearch = query => ({
  type: MOVIES.SEARCH_LOAD,
  value: query
});

const setSearchMovies = movies => ({
  type: MOVIES.SEARCH_SUCCESS,
  movies
});
const loadGenre = temp => ({
  type: MOVIES.GENRE_LOAD,
  value: temp
});

const setGenres = genres => ({
  type: MOVIES.GENRE_SUCCESS + "_ASYNC",
  genres
});

const setError = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

export {
  loadMovies,
  setMovies,
  loadRecMovies,
  setRecMovies,
  setQuerySearch,
  setSearchMovies,
  loadGenre,
  setGenres,
  setError
};
