const fetchaMovie = async id => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone > 400) {
    throw new Error(data.error);
  }

  return data;
};

export { fetchaMovie };
