import React from "react";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <div>PublicLayout</div>
      <Outlet />
    </>
  );
}

export default PublicLayout;
