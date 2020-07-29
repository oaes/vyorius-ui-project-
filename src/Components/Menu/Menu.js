import React from "react";
import "./Menu.css";
import * as ReactBootStrap from "react-bootstrap";
const Menu = () => {
  return (
    <div>
      <ReactBootStrap.Navbar bg="light" variant="light" expand="lg">
        <ReactBootStrap.Navbar.Brand
          href="#home"
          className="logo"
        ></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand
          href="#home"
          className="brand-name"
        ></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="mr-auto menu">
          <ReactBootStrap.Nav.Link href="#why vyorius">
            Why Vyorius?
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#solutions">
            Solutions
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#product">
            Product
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#use cases">
            Use Cases
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#team">Team</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#partners">
            Partners
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#contact us">
            Contact Us
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Button className="colorBtn">
          Launch Vyorius &#8702;
        </ReactBootStrap.Button>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Menu;
