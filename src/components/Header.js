import React, { Component } from "react";
import "./Header.css";
import { ListGroupItem, Accordion, Button, ListGroup } from "react-bootstrap";

class Header extends Component {
  state = {
    Items: [
      "Home",
      "Services",
      "Portfolio",
      "Experience",
      "Testimonial",
      "Contact",
    ],
  };
  render() {
    return (
      <di className="topnav navbar  navbar-light">
        {this.state.Items.map((item) => (
          <div className="item desktop">{item}</div>
        ))}
        <Accordion className="mobile">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img
              src={require("../assets/open-menu.svg")}
              style={{ width: "25px", height: "25px" }}
            ></img>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              {this.state.Items.map((item) => (
                <ListGroupItem
                  style={{
                    backgroundColor: "#20c5baf2",
                    borderColor: "#d8d8d8",
                  }}
                >
                  <div className="item">{item}</div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Accordion.Collapse>
        </Accordion>
      </di>
    );
  }
}

export default Header;
