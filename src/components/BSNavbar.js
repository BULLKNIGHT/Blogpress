import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

const BSNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/Blogpress/" className="nav-link"><Navbar.Brand>Blogpress</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Blogpress/" className="nav-link">Home</Link>
          <Link to="/Blogpress/addBlog" className="nav-link">Add Blog</Link>
        </Nav>
        <Nav>
        <Button variant="outline-light">SIGN OUT</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BSNavbar;
