import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LogOut } from "../Redux/AuthSlice";

function UserLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);
  console.log(user);
  const gotoAdmin = async () => {
    if (user.Role == "admin") {
      navigate("/admin");
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);
  //   LOGUT APPI CALL
  const Logout = async () => {
    try {
      const Request = await axios.post(
        "http://localhost:5000/logout/logout",
        {},
        { withCredentials: true }
      );
      if (Request.status == 200) {
        dispatch(LogOut());
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contianer ">
        {user ? (
          <div className="bg-black w-1/2 m-auto rounded-lg mt-8 h-96 flex flex-col justify-center ">
            <h2 className="text-white text-center">Welcome user {user.Name}</h2>
            <div className="text-white text-center">
              <button
                onClick={Logout}
                className=" bg-blue-700 rounded-lg  p-2 mx-2 "
              >
                Logout
              </button>
              {user.Role == "admin" ? (
                <button
                  onClick={gotoAdmin}
                  className=" bg-blue-700 rounded-lg  p-2 mx-2 "
                >
                  Go Admin
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <h1>user Not find</h1>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default UserLayout;
