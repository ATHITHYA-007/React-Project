import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout({ changeState, test }) {
  return (
    <div>
      {/* <h1>Parent Layout</h1> */}
      {/* <p>State value: {test ? "True" : "False"}</p> */}
      {/* <button onClick={changeState}>Toggle State</button> */}

      <div>
        <Link to="/">Login</Link>
        <br></br>
        <Link to="/Register">Register</Link>
        <br></br>
        <Link to="/JobApplicationForm">JobApplicationForm</Link>
        <br></br>
        <Link to="/ContactUs">ContactUs</Link>
        <br></br>
        <Link to="/RegisterGroup">RegisterGroup</Link>
      </div>
      <div>
      <Outlet />

      </div>
    </div>
  );
}

export default Layout;
