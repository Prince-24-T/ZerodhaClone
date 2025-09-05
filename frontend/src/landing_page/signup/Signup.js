import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhaclone-3pfm.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // navigate("/home");
          window.location.href = "https://zerodha01.netlify.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      handleError("Something went wrong. Please try again.");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container p-5">
      <h2 className="text-primary">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleOnChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="username"
            value={username}
            className="form-control"
            id="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            value={password}
            className="form-control"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <hr />

        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
