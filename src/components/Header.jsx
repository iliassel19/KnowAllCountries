import MoonIcon from "./Icons/MoonIcon";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`px-6 sm:px-10 md:px-16 h-20 shadow-md transition-colors relative z-50 ${
        isDarkTheme ? "bg-blue-700" : "bg-grey-200"
      }`}
    >
      <div className="flex items-center h-full justify-between max-w-7xl mx-auto">
        <h1
          className={`text-base font-bold lg:text-xl transition-colors ${
            isDarkTheme ? "text-grey-200" : "text-blue-900"
          }`}
        >
          Where in the world?
        </h1>
        <button
          onClick={toggleTheme}
          className={`text-base font-semibold transition-colors flex items-center gap-1 ${
            isDarkTheme ? "text-grey-200" : "text-blue-900"
          }`}
        >
          <MoonIcon />
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
