import React, { useState } from "react";
import "../styles/Form.css";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Form(props) {
  const [isSignin, setIsSignin] = useState(true);
  const [errors, setErrors] = useState(null);
  const isNullOrUndefined = (val) => val === null || val === undefined

  const handleLogin = (userObj) => {
    fetch("http://localhost:9999/login", {
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
  return (
    <>
      {isSignin ? (
        <LoginForm
          loginHandler={handleLogin}
          signupHandler={() => {
            setIsSignin(false);
          }}
          err={errors}
        />
      ) : (
        <SignupForm
          submitHandler={() => {
            setIsSignin(true);
          }}
        />
      )}
    </>
  );
}
// <SignupForm submitHandler={handleSubmit} />
export default Form;
