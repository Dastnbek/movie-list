import React, { Component } from "react";
// import Navbar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./components/main-page";
import NotFound from "./components/not-found";
import MovieDetail from "./components/movie-detail";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/main-page/:id" component={MovieDetail} />
          <Route path="/main-page" component={MainPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/main-page" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
