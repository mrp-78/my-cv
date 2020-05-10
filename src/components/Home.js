import React, { Component } from "react";
import "./Home.css";
import { Dropdown, ListGroup, Accordion, Card, Button } from "react-bootstrap";

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
          <a>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </a>
        </div>
      </header>
    );
  }
}

export default Home;
