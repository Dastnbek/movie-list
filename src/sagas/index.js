import watchMovieLoad from "./movieSaga";
import watchRecMovieLoad from "./recMovieSaga";
import watchGenreLoad from "./genreSaga";
import watchSearchQuery from "./searchSaga";
import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  yield all([
    fork(watchMovieLoad),
    fork(watchGenreLoad),
    fork(watchRecMovieLoad),
    fork(watchSearchQuery)
  ]);
}

export default rootSaga;
