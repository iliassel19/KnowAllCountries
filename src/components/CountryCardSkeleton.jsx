import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const CountryCardSkeleton = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <article
      className={`w-full h-[350px] transition-colors ${
        isDarkTheme ? "bg-blue-700" : "bg-grey-200"
      } shadow-lg rounded-[12px] overflow-hidden`}
    >
      <div className="animate-pulse">
        <div
          className={`h-[180px] ${isDarkTheme ? "bg-blue-900" : "bg-grey-400"}`}
        ></div>
        <div className="my-8 px-5">
          <div
            className={`w-3/4 h-4 rounded-sm ${
              isDarkTheme ? "bg-blue-900" : "bg-grey-400"
            } mb-6`}
          ></div>
          <ul className="flex flex-col gap-4">
            <li
              className={`w-full h-3 rounded-sm ${
                isDarkTheme ? "bg-blue-900" : "bg-grey-400"
              }`}
            ></li>
            <li
              className={`w-full h-3 rounded-sm ${
                isDarkTheme ? "bg-blue-900" : "bg-grey-400"
              }`}
            ></li>
            <li
              className={`w-full h-3 rounded-sm ${
                isDarkTheme ? "bg-blue-900" : "bg-grey-400"
              }`}
            ></li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CountryCardSkeleton;
