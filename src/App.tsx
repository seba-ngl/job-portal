import React from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

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
      <div className="container-hero">
        <div className="hero-text">
          <p>Your Dream</p>
          <p className="hero-title">Job is Waiting</p>
          <p className="hero-title3">5000+ Jobs</p>
          <div className="whole-search-bar">
            <div className="search-box">
              <button className="icon-search">
                <BiSearch></BiSearch>
              </button>
              <input
                type="text"
                placeholder="Enter job title, keyword"
                className="search-input"
              ></input>
            </div>
            <div className="search-location">
              <button className="icon-search">
                <GoLocation></GoLocation>
              </button>
              <input
                type="text"
                placeholder="Search Location"
                className="search-input-location"
              ></input>
            </div>
            <button className="btn-search">Search</button>
          </div>
        </div>

        <div className="hero-img">
          <img src={hero} className="hero-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
