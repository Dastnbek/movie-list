import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRecMovies, getaMovie, clearState } from "../actions";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MovieCard from "./movie-card";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";
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
    if (this.props.movieinfo !== null) {
      const { movies, genres, movieinfo } = this.props;
      const { vote_average: votes } = movieinfo;
      const imgUrl = "https://image.tmdb.org/t/p/w300";
      window.scrollTo(null, null);
      return (
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-3">
              <img
                src={imgUrl + movieinfo.poster_path}
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-9 movieInfo">
              <h1 style={{ width: "100%" }}>{movieinfo.original_title}</h1>
              <p>{movieinfo.overview}</p>
              <div>
                Status : {movieinfo.status}
                <br />
                Realease date : {movieinfo.release_date}
                <br />
                Budget : {movieinfo.budget} $
                <br />
                Rating :{" "}
                <StarRatings
                  rating={votes}
                  starRatedColor="#FFD700"
                  numberOfStars={10}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "10px 0 10px 0" }}>
            <h3 style={{ color: "white" }}>Related movies</h3>
          </div>
          <div className="row">
            {movies.map(res => (
              <div key={res.id} className="col-2">
                <Link
                  to={{
                    pathname: `/main-page/${res.id}`
                  }}
                >
                  <MovieCard genres={genres} res={res} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else return <GridLoader css={override} size={25} color={"white"} />;
  }
}

const mapStateToProps = ({ movieid, movies, genres, movieinfo }) => ({
  movieid,
  genres,
  movieinfo,
  movies
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
