import React from "react";
import MovieCard from "./movie-card";
import { Link } from "react-router-dom";
import { loadRecMovies } from "../actions";

const MovieContainer = props => {
  const { movies, genres } = props;
  console.log(movies);
  return (
    <div className="container myContainer">
      <div className="row">
        {movies.map(res => (
          <div
            onClick={() => loadRecMovies(res.id)}
            key={res.id}
            className="col-md-3"
          >
            <Link
              to={{
                pathname: `/main-page/${res.id}`,
                query: {
                  id: res.id,
                  title: res.original_title,
                  path: res.poster_path,
                  backpath: res.backdrop_path,
                  desc: res.overview,
                  rating: res.vote_average
                }
              }}
            >
              <MovieCard genres={genres} res={res} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
