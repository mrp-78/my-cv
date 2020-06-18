import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    social: [
      {
        image: "linkein.svg",
        url: "https://www.linkedin.com/in/mohammad-reza-pakzadian-72b13b197/",
      },
      {
        image: "github.svg",
        url: "https://github.com/mrp-78",
      },
      {
        image: "telegram.svg",
        url: "https://t.me/mrp_78",
      },
    ],
  };
  render() {
    return (
      <section id="Home">
        <div className="row banner">
          <div className="banner-text">
            <img
              alt="profile"
              className="profile"
              src={require("../assets/profile.png")}
            />
            <h1 className="responsive-headline">Mohammadreza Pakzadian</h1>
            <h3>Data Engineer / Web Developer</h3>
            <ul className="social">
              {this.state.social.map((item) => (
                <li key={item.url}>
                  <a href={item.url}>
                    <img
                      alt={item.image}
                      src={require("../assets/" + item.image)}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="ch-container" href="#Background">
            <span className="chevron"></span>
            <span className="chevron"></span>
            <span className="chevron"></span>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
