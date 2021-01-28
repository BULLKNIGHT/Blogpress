import React, { useState } from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import BSNavbar from "./BSNavbar";
import Footer from "./Footer";
import Home from "./Home";
import AddBlog from "./AddBlog";

import Form from "./Form";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const userLogin = (userObj) => {
    setUser(userObj);
    setIsLogin(true);
  };
  return (
    <>
      <BSNavbar />
      <Switch>
        <Route path="/Blogpress/" component={Home} exact />
        <Route path="/Blogpress/addBlog" component={AddBlog} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;

// <>{isLogin ? <Home user={user} /> : <Form loginHandler={userLogin} />}</>
