import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "https://zerodhaclone-3pfm.onrender.com/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // navigate("/home");
          window.location.href = "http://localhost:3000";
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
      username: "",
    });
  };

  return (
    <div className="container p-5">
      <h2 className="text-primary">Login</h2>
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
          Login
        </button>
        <hr />

        <span>
          Don’t have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
