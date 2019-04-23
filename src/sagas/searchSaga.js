import { select, call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchMovies } from "../api";
import { setSearchMovies } from "../actions";
import { MOVIES } from "../constants";

const getquery = state => state.searchquery;
const getpage = state => state.searchpage;

function* handleSearchQuery() {
  try {
    const query = yield select(getquery);
    const page = yield select(getpage);
    const movies = yield call(fetchSearchMovies, query, page);

    yield put(setSearchMovies(movies));
  } catch (e) {
    //yield put(setError(e.toString()));
  }
}

export default function* watchSearchQuery() {
  yield takeEvery(MOVIES.SEARCH_LOAD, handleSearchQuery);
}
