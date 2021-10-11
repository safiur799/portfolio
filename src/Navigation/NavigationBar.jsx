import React from "react";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavigationLinks } from "../Helpers/NavigationLinks";

function createLinks() {
  return NavigationLinks.map((el, ind) => (
    <Nav.Link key={ind} href={el.ref}>
      {el.name}
    </Nav.Link>
  ));
}
function NavigationBar() {
  return (
    <div id="home">
      <Navbar
        className="container_navbar"
        expand="md"
        style={{ zIndex: "2", top: "0", position: "fixed", width: "100%" }}
        collapseOnSelect
      >
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="home">
          Safiur Rahaman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
