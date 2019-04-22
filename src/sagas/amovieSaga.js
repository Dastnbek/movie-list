import { call, put, takeEvery } from "redux-saga/effects";
import { fetchaMovie } from "../api/getaMovie.js";
import { setaMovie, setError } from "../actions";
import { MOVIES } from "../constants";

function* handleMovieInfo(payload) {
  try {
    const movie = yield call(fetchaMovie, payload.value);

    yield put(setaMovie(movie));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchMovieInfoLoad() {
  yield takeEvery(MOVIES.GETAMOVIE, handleMovieInfo);
}
