import React, { Component, Fragment } from "react";
import Navbar from "./navbar";
import Pagination from "react-js-pagination";

const getPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=";
const getGenres =
  "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=";
const myKey = "06aa50e38281dd9b38543df33f8bab2c";
const imgUrl = "https://image.tmdb.org/t/p/w500";

class MainPage extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 20,
    totalPages: 0
  };

  componentDidMount() {
    fetch(getPopularMovies + myKey)
      .then(response => response.json())
      .then(data =>
        this.setState({ movies: data.results, totalPages: data.total_pages })
      );

    fetch(getGenres + myKey)
      .then(response => response.json())
      .then(data => this.setState({ genres: data.genres }));
  }

  idToname = (generas, secondArr) => {
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

  handlePageChange = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { movies, genres } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div style={{ marginTop: "60px" }} className="container">
          <div className="row">
            {movies.map(res => (
              <div key={res.id} className="col-md-3">
                <div className="card-deck">
                  <div className="card">
                    <img
                      src={imgUrl + res.poster_path}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{res.title}</h5>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Release date : {res.release_date} <br />
                        Genres :{this.idToname(genres, res.genre_ids)}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Pagination
              activePage={this.state.currentPage}
              itemsCountPerPage={2}
              totalItemsCount={20}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
              innerClass={"pagination"}
              itemClass={"page-item"}
              linkClass={"page-link"}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
