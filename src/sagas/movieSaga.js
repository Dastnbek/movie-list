import { select, call, put, takeEvery } from "redux-saga/effects";
import { fetchMovies } from "../api/getMovies.js";
import { setMovies, setError } from "../actions";
import { MOVIES } from "../constants";

const getPage = state => state.currentpage;

function* handleMovieLoad() {
  try {
    const page = yield select(getPage);
    const movies = yield call(fetchMovies, page);
    yield put(setMovies(movies));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchMovieLoad() {
  yield takeEvery(MOVIES.LOAD, handleMovieLoad);
}
