import { call, put, takeEvery } from "redux-saga/effects";
import { fetchRecMovies } from "../api";
import { setRecMovies } from "../actions";
import { MOVIES } from "../constants";

function* handleRecMovieLoad(payload) {
  try {
    const movies = yield call(fetchRecMovies, payload.value);
    yield put(setRecMovies(movies));
  } catch (e) {
    // yield put(setError(e.toString()));
  }
}

export default function* watchRecMovieLoad() {
  yield takeEvery(MOVIES.REC_LOAD, handleRecMovieLoad);
}
