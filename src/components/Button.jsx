import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Button = ({ children, onClick, className, style }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <button
      className={`px-9 h-[44px] flex items-center justify-center gap-2 text-base capitalize  ${
        isDarkTheme ? "bg-blue-700 text-grey-200" : "bg-grey-200 text-blue-800"
      } shadow-md rounded-md font-semibold transition-colors ${
        className ? className : ""
      }`}
      onClick={onClick}
      style={{ transform: `translateX(${style}%)` }}
    >
      {children}
    </button>
  );
};

export default Button;
