import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRecMovies, getaMovie } from "../actions";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MovieCard from "./movie-card";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.loadRecMovies(this.props.match.params.id);
    this.props.getaMovie(this.props.match.params.id);
  }

  render() {
    const { recmovies, genres, movieinfo } = this.props;

    const imgUrl = "https://image.tmdb.org/t/p/w300";
    const rating = movieinfo.vote_average / 2;
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
          <div className="col-9" style={{ color: "white" }}>
            <h1 style={{ width: "100%" }}>{movieinfo.original_title}</h1>
            <p>{movieinfo.overview}</p>
            <div>
              {/* <StarRatings
                rating={rating}
                starRatedColor="#FFD700"
                numberOfStars={5}
              /> */}
            </div>
          </div>
        </div>
        <div className="row">
          {recmovies.map(res => (
            <div
              onClick={() => loadRecMovies(res.id)}
              key={res.id}
              className="col-2"
            >
              <Link
                to={{
                  pathname: `/main-page`
                }}
              >
                <MovieCard genres={genres} res={res} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movieid, recmovies, genres, movieinfo }) => ({
  movieid,
  genres,
  movieinfo,
  recmovies
});
const mapDispatchToProps = dispatch => ({
  loadRecMovies: id => dispatch(loadRecMovies(id)),
  getaMovie: id => dispatch(getaMovie(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
