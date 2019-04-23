import React from "react";
const NotFound = props => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Not Found</h1>
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/")}
      >
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
