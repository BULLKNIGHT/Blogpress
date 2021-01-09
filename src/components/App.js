import React, { useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import Form from "./Form";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const userLogin = (userObj) => {
    setUser(userObj);
    setIsLogin(true);
  };
  return (
    <>{isLogin ? <Home user={user} /> : <Form loginHandler={userLogin} />}</>
  );
}

export default App;
