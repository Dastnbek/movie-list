import React from "react";
import StarRatings from "react-star-ratings";

const Amovie = ({ movieinfo }) => {
  const { vote_average: votes } = movieinfo;
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  return (
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
  );
};

export default Amovie;
