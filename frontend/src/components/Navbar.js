import { Link } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
  return <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" classname="navbar-logo"></Link>
        </div>
    </nav>
  </>;
}
