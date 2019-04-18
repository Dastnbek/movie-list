import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRecMovies } from "../actions";
import { Link } from "react-router-dom";
import MovieCard from "./movie-card";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.loadRecMovies(this.props.location.query.id);
  }
  render() {
    const { location, recmovies } = this.props;
    const movieInfo = location.query;

    const imgUrl = "https://image.tmdb.org/t/p/w300";
    const imgPath = imgUrl + movieInfo.path;
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-3">
            <img src={imgPath} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-9">
            <h1 style={{ width: "100%" }}>{movieInfo.title}</h1>
            <p>{movieInfo.desc}</p>
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
                <MovieCard res={res} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movieid, recmovies }) => ({
  movieid,
  recmovies
});
const mapDispatchToProps = dispatch => ({
  loadRecMovies: id => dispatch(loadRecMovies(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
