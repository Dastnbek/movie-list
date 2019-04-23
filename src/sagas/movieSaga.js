import { call, put, takeEvery } from "redux-saga/effects";
import { fetchMovies } from "../api";
import { setMovies, setErrorPopular } from "../actions";
import { MOVIES } from "../constants";

function* handleMovieLoad(payload) {
  try {
    const movies = yield call(fetchMovies, payload.value);
    yield put(setMovies(movies));
  } catch (e) {
    yield put(setErrorPopular(e.toString()));
  }
}

export default function* watchMovieLoad() {
  yield takeEvery(MOVIES.LOAD, handleMovieLoad);
}
