import { select, call, put, takeEvery } from "redux-saga/effects";
import { fetchaMovie } from "../api/getaMovie.js";
import { setaMovie, setError } from "../actions";
import { MOVIES } from "../constants";

const getId = state => state.movieid;

function* handleMovieInfo() {
  try {
    const id = yield select(getId);
    const movie = yield call(fetchaMovie, id);
    yield put(setaMovie(movie));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchMovieInfoLoad() {
  yield takeEvery(MOVIES.GETAMOVIE, handleMovieInfo);
}
