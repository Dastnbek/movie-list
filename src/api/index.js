// const getPopularMovies =
//   "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c";
// const getGenres =
//   "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=";
// const myKey = "06aa50e38281dd9b38543df33f8bab2c";
// const imgUrl = "https://image.tmdb.org/t/p/w500";
const fetchMovies = async page => {
  console.log(page);
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=" +
      page +
      "&language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone > 400) {
    throw new Error(data.error);
  }

  return data;
};

export { fetchMovies };
