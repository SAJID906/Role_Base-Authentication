import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const user = useSelector((state) => {
    return state.Auth.user;
  });
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    // if user not and role is not admin one condition true the go signin
    if (!user || user.data.Role !== "admin") {
      navigate("/signin");
    }
  }, [user]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default AdminLayout;
