import { takeEvery, select, call, put } from "redux-saga/effects";
import { MOVIES } from "../constants";
import { fetchMovies } from "../api";
import { setMovies, setError } from "../actions";

const getPage = state => state.currentpage;

function* handleMovieLoad() {
  try {
    const page = yield select(getPage);
    const movies = yield call(fetchMovies, page);
    yield put(setMovies(movies));
  } catch (e) {
    //dispatch error
    yield put(setError(e.toString()));
  }
}

export default function* watchMovieLoad() {
  yield takeEvery(MOVIES.LOAD, handleMovieLoad);
}
