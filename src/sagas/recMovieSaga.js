import { select, call, put, takeEvery } from "redux-saga/effects";
import { fetchRecMovies } from "../api/getRecMovies.js";
import { setRecMovies, setError } from "../actions";
import { MOVIES } from "../constants";

const getId = state => state.movieid;

function* handleRecMovieLoad() {
  try {
    const id = yield select(getId);
    console.log(id);
    const movies = yield call(fetchRecMovies, id);
    yield put(setRecMovies(movies));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchRecMovieLoad() {
  yield takeEvery(MOVIES.REC_LOAD, handleRecMovieLoad);
}
