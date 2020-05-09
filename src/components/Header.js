import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <di className="topnav navbar  navbar-light">
        <div className="item selected">Home</div>
        <div className="item">Services</div>
        <div className="item">Portfilio</div>
        <div className="item">Experience</div>
        <div className="item">Testimonial</div>
        <div className="item">Contact</div>
      </di>
    );
  }
}

export default Header;
