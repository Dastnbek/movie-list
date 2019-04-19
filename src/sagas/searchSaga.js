import { select, call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchMovies } from "../api/getSearchMovies";
import { setSearchMovies, setError } from "../actions";
import { MOVIES } from "../constants";

const getquery = state => state.searchquery;
function* handleSearchQuery() {
  try {
    const query = yield select(getquery);
    const movies = yield call(fetchSearchMovies, query);
    yield put(setSearchMovies(movies));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchSearchQuery() {
  yield takeEvery(MOVIES.SEARCH_LOAD, handleSearchQuery);
}
