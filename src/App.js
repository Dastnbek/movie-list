import React, { Component } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./components/main-page";
import configureStore from "./store";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Navbar />
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
