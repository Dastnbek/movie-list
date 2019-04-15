import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './components/main-page';

class App extends Component {
  render() {
    return (
      <div className="container">
          <MainPage/>
      </div>
    );
  }
}

export default App;
