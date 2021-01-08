import React from "react";
import useForm from './useForm';
import Banner from "../img/banner2.png";
import "../styles/Form.css";

const SignupForm = (props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    props.submitHandler
  );

  return (
    <>
    <div className="form-title">Blogpress</div>
    <div className="form-container">
    <div className="form-content-left">
        <img className="form-img" src={Banner} alt="Blogpress" />
      </div>
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            id="userName"
            type="text"
            name="userName"
            className="form-input"
            placeholder="Enter username"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
          {props.err && <p>{props.err}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default SignupForm;
