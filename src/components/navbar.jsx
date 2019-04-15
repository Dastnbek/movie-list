import React from "react";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <div className="col" />
        <div className="col-6">
          <form className="form-inline">
            <input
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
};

export default Navbar;
