import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadMovies, loadRecMovies, loadGenre } from "../actions";
import Pagination from "react-js-pagination";
import Navbar from "./navbar";
import MovieContainer from "./movie-container";
import "../utils/myCss.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.loadMovies(1);
    this.props.loadGenre(1);
  }

  render() {
    let movieTodisplay = [];
    const {
      movies,
      currentpage,
      genres,
      loadMovies,
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
        {searchmovies.length === 0 && (
          <Pagination
            hideDisabled
            activePage={currentpage}
            itemsCountPerPage={20}
            totalItemsCount={19720}
            pageRangeDisplayed={5}
            innerClass={"pagination"}
            itemClass={"page-item"}
            linkClass={"page-link"}
            onChange={loadMovies}
          />
        )}
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
  genres
}) => ({
  currentpage,
  loading,
  movies,
  genres,
  searchmovies,
  error
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(page)),
  loadRecMovies: id => dispatch(loadRecMovies(id)),
  loadGenre: value => dispatch(loadGenre(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
