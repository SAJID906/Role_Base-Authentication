import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formSignup, setformSinup] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  //for error Handling
  const [errormessage, seterrorMessage] = useState(null);
  // usenavigate
  const navigate = useNavigate();
  const handler = async (e) => {
    e.preventDefault();
    try {
      if (!formSignup.Name || !formSignup.Email || !formSignup.Password) {
        seterrorMessage("Please fill out all fields");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/SignUP/SignUp",
        formSignup
      );
      // when successfully signup move to singin
      setTimeout((response) => {
        navigate("/signIn");
      }, 2000);

      if (response.data) {
        seterrorMessage(response.data.message);
      }
      // field empty after successful signup
      setformSinup({
        Name: "",
        Email: "",
        Password: "",
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="min-h-screen bg-slate-400 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <div className="mb-6 text-center">
          <button className="text-3xl text-white bg-gradient-to-tr from-white to-slate-500 via-pink-600 font-bold p-3 rounded">
            Authen's
          </button>
        </div>
        {/* Form */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              // empty when click signup
              value={formSignup.Name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              onChange={(e) => {
                setformSinup({ ...formSignup, [e.target.id]: e.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              value={formSignup.Email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              onChange={(e) => {
                setformSinup({ ...formSignup, [e.target.id]: e.target.value });
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              value={formSignup.Password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              onChange={(e) => {
                setformSinup({ ...formSignup, [e.target.id]: e.target.value });
              }}
            />
          </div>
          {/* Show message when click Signup  */}
          {errormessage && (
            <p className="text-red-600  text-center font-semibold py-2">
              {errormessage}
            </p>
          )}
          <div className="flex items-center justify-between">
            <button
              onClick={handler}
              className="bg-gradient-to-tr from-orange-500 to-slate-800 via-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <p>
            Have an account?
            <span className="text-blue-600">
              <Link to="/signIn">login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
