import React from "react";
const MovieCard = props => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { res } = props;
  return (
    <div className="card-deck ">
      <div className="card ">
        <img
          src={imgUrl + res.poster_path}
          className="card-img-top myCard"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{res.title}</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Release date : {res.release_date} <br />
            {/* Genres :{this.idToname(genres, res.genre_ids)} */}
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
