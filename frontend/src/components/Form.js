import React, { useState } from "react";
import "../styles/Form.css";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Form(props) {
  const [isSignin, setIsSignin] = useState(true);
  const [errors, setErrors] = useState(null);
  const isNullOrUndefined = (val) => val === null || val === undefined

  const handleLogin = (userObj) => {
    fetch("https://blogpress-molay.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ userName: userObj.userName, password: userObj.password }),
      headers: {
        "Content-Type": "application/json",
      },
      
    }).then(r => r.json()).then(data => {
      if(!isNullOrUndefined(data.success))
        props.loginHandler(userObj);
      if(!isNullOrUndefined(data.err))
        setErrors(data.err);
    });
    // props.loginHandler(userObj);
  };

  const handleSubmit = (userObj) => {
    fetch("https://blogpress-molay.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify({ userName: userObj.userName, email:userObj.email, password: userObj.password }),
      headers: {
        "Content-Type": "application/json",
      },
      
    }).then(r => r.json()).then(data => {
      if(!isNullOrUndefined(data.success)) {
        setIsSignin(true);
        setErrors(null);
      }
      if(!isNullOrUndefined(data.err))
        setErrors(data.err);
    });
    
  }
  return (
    <>
      {isSignin ? (
        <LoginForm
          loginHandler={handleLogin}
          signupHandler={() => {
            setErrors(null);
            setIsSignin(false);
          }}
          err={errors}
        />
      ) : (
        <SignupForm
          submitHandler={handleSubmit}
          err={errors}
        />
      )}
    </>
  );
}
// <SignupForm submitHandler={handleSubmit} />
export default Form;
