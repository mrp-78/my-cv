import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <img className="profile" src={require("../assets/profile.png")} />
            <h1 className="responsive-headline">Mohammadreza Pakzadian</h1>
            <h3>Data Engineer / Web Developer</h3>
            <ul className="social">
              <li>
                <a href="#">
                  <img src={require("../assets/linkein.svg")} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../assets/github.svg")} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../assets/telegram.svg")} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>{" "} */}
        <a class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </a>
      </header>
    );
  }
}

export default Home;
