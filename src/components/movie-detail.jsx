import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRecMovies } from "../actions";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MovieCard from "./movie-card";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.loadRecMovies(this.props.location.query.id);
  }
  render() {
    const { location, recmovies, genres } = this.props;
    const movieInfo = location.query;

    const imgUrl = "https://image.tmdb.org/t/p/w300";
    const imgPath = imgUrl + movieInfo.path;
    console.log(movieInfo);
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-3">
            <img src={imgPath} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-9" style={{ color: "white" }}>
            <h1 style={{ width: "100%" }}>{movieInfo.title}</h1>
            <p>{movieInfo.desc}</p>
            <div>
              <StarRatings
                rating={movieInfo.rating / 2}
                starRatedColor="#FFD700"
                numberOfStars={5}
              />
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

const mapStateToProps = ({ movieid, recmovies, genres }) => ({
  movieid,
  genres,
  recmovies
});
const mapDispatchToProps = dispatch => ({
  loadRecMovies: id => dispatch(loadRecMovies(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
