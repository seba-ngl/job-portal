import React from "react";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo" alt="" />

        <ul>
          <li>Home</li>
          <li>Find jobs</li>
          <li>Post Jobs</li>
        </ul>
        <div className="wrap-buttons">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
