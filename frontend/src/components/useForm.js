import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isNullOrUndefined = (val) => val === null || val === undefined;

  const validateInfo = (val) => {
    let err = {};

    if (!val.userName.trim()) {
      err.userName = "Username is required";
    }
    if (!val.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
      err.email = "Email address is invalid";
    }
    if (!val.password) {
      err.password = "Password is required";
    } else if (val.password.length < 6) {
      err.password = "Password needs to be 6 characters or more";
    }

    if (!val.password2) {
      err.password2 = "Password is required";
    } else if (val.password2 !== val.password) {
      err.password2 = "Passwords do not match";
    }
    console.log(values, err);
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setErrors(validateInfo(values));

    setIsSubmitting(true);
  };

  useEffect(() => {
    console.log("useEffect ", errors);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
