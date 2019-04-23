import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGenre } from "../api";
import { setGenres } from "../actions";
import { MOVIES } from "../constants";

function* handleGenreLoad() {
  try {
    const genres = yield call(fetchGenre);
    yield put(setGenres(genres));
  } catch (e) {
    //dispatch error
    //yield put(setError(e.toString()));
  }
}

export default function* watchGenreLoad() {
  yield takeEvery(MOVIES.GENRE_LOAD, handleGenreLoad);
}
