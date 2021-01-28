import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="bottom">
      <Nav className="mr-auto">
        <Navbar.Text>© 2021 Copyright: Blogpress.com</Navbar.Text>
      </Nav>
      <Nav>
        <Navbar.Text>
          Follow us: <YouTubeIcon fontSize="large" />
          <FacebookIcon  fontSize="large" />
          <InstagramIcon fontSize="large" />
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};

export default Footer;
