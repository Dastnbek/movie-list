import React from "react";
const numberTogenre = (generas, secondArr) => {
  let genNames = [];
  generas.forEach(el1 =>
    secondArr.forEach(el2 => {
      if (el1.id === el2) {
        genNames.push(" " + el1.name);
      }
    })
  );

  return genNames;
};
const MovieCard = props => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { res, genres } = props;

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
            {numberTogenre(genres, res.genre_ids)}
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
