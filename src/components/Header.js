import React, { Component } from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";

class Header extends Component {
  state = {
    Items: ["Home", "Background", "Skills", "Projects"],
  };
  render() {
    return (
      <Navbar
        className="topnav shadow"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="responsive-navbar-nav"
          id="responsive-navbar-nav m-auto"
        >
          <Nav>
            {this.state.Items.map((item) => (
              <Nav.Link key={item} className="item" href={"#" + item}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
