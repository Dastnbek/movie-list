import React, { Component } from "react";
import GridLoader from "react-spinners/GridLoader";
import Recomended from "./related-movies";
import Amovie from "./amovie-info";
import { loadRecMovies, getaMovie, clearState } from "../actions";
import { connect } from "react-redux";
import { css } from "@emotion/core";

const override = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 30%;
  margin: auto;
`;

class MovieDetail extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.loadRecMovies(nextProps.match.params.id);
      this.props.getaMovie(nextProps.match.params.id);
    }
  }
  componentDidMount() {
    this.props.loadRecMovies(this.props.match.params.id);
    this.props.getaMovie(this.props.match.params.id);
  }

  render() {
    window.scrollTo(null, null);
    if (this.props.error !== null) {
      this.props.history.push("/not-found");
    }
    if (this.props.movieinfo !== null) {
      const { movies, genres, movieinfo } = this.props;
      return (
        <div className="container" style={{ marginTop: "30px" }}>
          <Amovie movieinfo={movieinfo} />
          <Recomended movies={movies} genres={genres} />
        </div>
      );
    } else return <GridLoader css={override} size={25} color={"white"} />;
  }
}

const mapStateToProps = ({ movieid, error, movies, genres, movieinfo }) => ({
  movieid,
  genres,
  movieinfo,
  movies,
  error
});
const mapDispatchToProps = dispatch => ({
  loadRecMovies: id => dispatch(loadRecMovies(id)),
  getaMovie: id => dispatch(getaMovie(id)),
  clearState: () => dispatch(clearState())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
