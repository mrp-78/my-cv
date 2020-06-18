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
          <a key={item} className="item desktop" href={"#" + item}>
            {item}
          </a>
        ))}
        <Accordion className="mobile">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img
              alt="open-menue"
              src={require("../assets/open-menu.svg")}
              style={{ width: "25px", height: "25px" }}
            ></img>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="top">
            <ListGroup className="shadow top">
              {this.state.Items.map((item) => (
                <ListGroupItem
                  key={item}
                  style={{
                    backgroundColor: "#20c5baf2",
                    borderColor: "#d8d8d8",
                  }}
                >
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    href={"#" + item}
                  >
                    <div className="item" key={item}>
                      {item}
                    </div>
                  </Accordion.Toggle>
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
