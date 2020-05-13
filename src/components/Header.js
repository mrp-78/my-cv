import React, { Component } from "react";
import "./Header.css";
import { ListGroupItem, Accordion, Button, ListGroup } from "react-bootstrap";

class Header extends Component {
  state = {
    Items: ["Home", "Background", "Skills", "Projects", "Contact"],
  };
  render() {
    return (
      <nav className="topnav navbar shadow">
        {this.state.Items.map((item) => (
          <a className="item desktop" href={"#" + item}>
            {item}
          </a>
        ))}
        <Accordion className="mobile">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img
              src={require("../assets/open-menu.svg")}
              style={{ width: "25px", height: "25px" }}
            ></img>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup className="shadow">
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
      </nav>
    );
  }
}

export default Header;
