import React from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

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
