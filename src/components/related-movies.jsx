import React from "react";
import MovieCard from "./movie-card";
import { Link } from "react-router-dom";

const Recomended = ({ movies, genres }) => {
  return (
    <div>
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
};

export default Recomended;
