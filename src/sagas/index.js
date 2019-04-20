import watchMovieLoad from "./movieSaga";
import watchRecMovieLoad from "./recMovieSaga";
import watchGenreLoad from "./genreSaga";
import watchSearchQuery from "./searchSaga";
import watchMovieInfoLoad from "./amovieSaga";
import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  yield all([
    fork(watchMovieLoad),
    fork(watchGenreLoad),
    fork(watchRecMovieLoad),
    fork(watchMovieInfoLoad),
    fork(watchSearchQuery)
  ]);
}

export default rootSaga;
