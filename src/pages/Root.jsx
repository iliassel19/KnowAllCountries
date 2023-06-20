import React, { useContext } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
const Root = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className={`${
          isDarkTheme ? "bg-blue-800" : "bg-grey-300"
        } flex-1 py-12 transition-colors`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
