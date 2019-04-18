import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadMovies, setGenres, loadRecMovies } from "../actions";
import Pagination from "react-js-pagination";
import Navbar from "./navbar";
import MovieContainer from "./movie-container";
import "../utils/myCss.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.loadMovies(1);
    this.props.setGenres();
  }

  render() {
    let movieTodisplay = [];
    const { movies, currentpage, loadMovies, searchmovies } = this.props;
    if (searchmovies.length === 0) {
      movieTodisplay = movies;
    } else {
      movieTodisplay = searchmovies;
    }
    return (
      <Fragment>
        <Navbar />
        <MovieContainer movies={movieTodisplay} />
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
  setGenres: () => dispatch(setGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
