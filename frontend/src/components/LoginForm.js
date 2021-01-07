import { useEffect, useState } from "react";
import Banner from "../img/banner2.png";
import "../styles/Form.css";

function LoginForm(props) {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(user));
  };

  const validateInfo = (values) => {
    const err = {};
    if (!values.userName.trim()) {
      err.username = "Username is required";
    }
    if (!values.password) {
      err.password = "Password is required";
    }
    return err;
  };


  useEffect(()=>{
      if(errors !== null && Object.keys(errors).length === 0)
        props.loginHandler(user);
  }, [errors])

  return (
    <>
    <div className="form-title">Blogpress</div>
    <div className="form-container">
    <div className="form-content-left">
        <img className="form-img" src={Banner} alt="Blogpress" />
      </div>
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            id="userName"
            type="text"
            name="userName"
            className="form-input"
            placeholder="Enter your username"
            value={user.userName}
            onChange={handleChange}
          />
          {errors && errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />
          {errors && errors.password && <p>{errors.password}</p>}
          {props.err && <p>{props.err}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
        <span className="form-input-login">
          Don't have an account? <div onClick={props.signupHandler}><u>click here</u></div>
        </span>
      </form>
    </div>
    </div>
    </>
  );
}

export default LoginForm;
