import { MOVIES } from "../constants";

const loadMovies = page => ({
  type: MOVIES.LOAD,
  value: page
});

const setMovies = movies => ({
  type: MOVIES.LOAD_SUCCESS,
  movies
});

const setGenres = genres => ({
  type: MOVIES.LOAD_SUCCESS,
  genres
});

const setError = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

export { loadMovies, setMovies, setGenres, setError };
