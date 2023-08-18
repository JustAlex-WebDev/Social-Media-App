import React from "react";
import { useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {" "}
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ? null : (
        <>
          <TopNav />
          <BottomNav />
        </>
      )}
    </>
  );
};

export default Navigation;
