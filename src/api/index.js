// get a movie info
const fetchaMovie = async id => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(respone.status);
  }

  return data;
};
// get all genres
const fetchGenre = async () => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(data.error);
  }
  return data;
};
// get popular movies
const fetchMovies = async page => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=" +
      page +
      "&language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(data.error);
  }

  return data;
};
// get recomemded movies
const fetchRecMovies = async id => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "/recommendations?page=1&language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(data.error);
  }

  return data;
};
// get searched movies
const fetchSearchMovies = async (query, id) => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&page=" +
      id +
      "&query=" +
      query +
      "&language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(data.error);
  }

  return data;
};

export {
  fetchaMovie,
  fetchGenre,
  fetchMovies,
  fetchRecMovies,
  fetchSearchMovies
};
