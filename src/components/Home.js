import React from "react";
import BSNavbar from "./BSNavbar";
import Footer from "./Footer";
import AllBlogs from "./AllBlogs";
import AddBlog from "./AddBlog";
import { Switch, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <AllBlogs />
      {/* <AddBlog /> */}
      
      <Footer />
     
    </>
  );
};

export default Home;
