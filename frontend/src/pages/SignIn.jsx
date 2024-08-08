import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetUser } from "../Redux/AuthSlice";
import { toast } from "react-hot-toast";

function SignIn() {
  // formdata
  const [formlogin, setformlogin] = useState({
    Email: "",
    Password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handle form data
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!formlogin.Email || !formlogin.Password) {
        toast.success("Please fill out all fields");
        return;
      }

      const Request = await axios.post(
        "http://localhost:5000/login/login",
        formlogin,
        { withCredentials: true }
      );
      const response = Request.data;
      // console.log(response);
      if (Request.status == 200) {
        toast.success(response.message);
        // when successful login then navigate to home page
        if (response.data.Role == "admin") {
          setTimeout(() => {
            navigate("/admin");
          }, 3000);
        } else if (response.data.Role == "user") {
          navigate("/");
        }
      }

      dispatch(SetUser(response));
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };
  return (
    <>
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                value={formlogin.Email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                onChange={(e) => {
                  setformlogin({
                    ...formlogin,
                    [e.target.id]: e.target.value,
                  });
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
                value={formlogin.Password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                onChange={(e) => {
                  setformlogin({
                    ...formlogin,
                    [e.target.id]: e.target.value,
                  });
                }}
              />
            </div>
            {/* Show message when click Signup  */}

            <div className="flex items-center justify-between">
              <button
                onClick={LoginHandler}
                className="bg-gradient-to-tr from-orange-500 to-slate-800 via-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
            <p>
              Have an account?
              <span className="text-blue-600">
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
