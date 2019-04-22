import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import Navbar from "./navbar";
import MovieContainer from "./movie-container";
import "../utils/myCss.css";
import {
  loadMovies,
  loadRecMovies,
  loadGenre,
  loadSearchMovies
} from "../actions";

class MainPage extends Component {
  componentDidMount() {
    this.props.loadMovies(this.props.currentpage);
    this.props.loadGenre();
  }

  render() {
    let movieTodisplay = [];
    const {
      movies,
      currentpage,
      genres,
      loadMovies,
      totalresults,
      searchmovies
    } = this.props;
    if (searchmovies.length === 0) {
      movieTodisplay = movies;
    } else {
      movieTodisplay = searchmovies;
    }

    return (
      <Fragment>
        <Navbar />
        <MovieContainer genres={genres} movies={movieTodisplay} />

        <Pagination
          hideDisabled
          activePage={currentpage}
          itemsCountPerPage={20}
          totalItemsCount={totalresults}
          pageRangeDisplayed={5}
          innerClass={"pagination"}
          itemClass={"page-item"}
          linkClass={"page-link"}
          onChange={loadMovies}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  loading,
  movies,
  error,
  currentpage,
  searchmovies,
  totalresults,
  genres
}) => ({
  currentpage,
  loading,
  movies,
  genres,
  searchmovies,
  totalresults,
  error
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(page)),
  loadRecMovies: id => dispatch(loadRecMovies(id)),
  loadGenre: () => dispatch(loadGenre()),
  loadSearchMovies: id => dispatch(loadSearchMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
