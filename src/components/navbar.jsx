import React, { Component } from "react";
import { setQuerySearch } from "../actions";
import { connect } from "react-redux";
import logo from "../utils/logo.png";

let temp = "";
class Navbar extends Component {
  handleChange = e => {
    temp = e.target.value;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuerySearch(temp);
  };
  render() {
    return (
      <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light myNav">
          <div className="col">
            <div className="navbar-brand" href="#">
              <img style={{ width: "100px" }} src={logo} alt="" />
            </div>
          </div>
          <div className="col-6">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <input
                onChange={this.handleChange}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for movie"
                aria-label="Search"
                style={{ width: "100%" }}
              />
            </form>
          </div>
          <div className="col" />
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ searchquery }) => ({
  searchquery
});
const mapDispatchToProps = dispatch => ({
  setQuerySearch: query => dispatch(setQuerySearch(query))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
