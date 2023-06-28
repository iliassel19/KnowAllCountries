import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import ArrowDownIcon from "./Icons/ArrowDownIcon";
import PaginationContext from "../context/PaginationContext";
// On reload, the selector was returning to All value for selector. So to save it, I used a switch statement on the Url pathname to prevent the previous problem
const saveSelectorOnRealod = (path) => {
  switch (path) {
    case "/all":
      return "All";
    case "/region/africa":
      return "Africa";
    case "/region/europe":
      return "Europe";
    case "/region/america":
      return "America";
    case "/region/asia":
      return "Asia";
    case "/region/oceania":
      return "Oceania";
    default:
      return "All";
  }
};

const RegionSelector = () => {
  const { pathname } = useLocation();

  const [selector, setSelector] = useState(saveSelectorOnRealod(pathname));
  const [isOpen, setIsOpen] = useState();
  const { isDarkTheme } = useContext(ThemeContext);
  const { togglePagination } = useContext(PaginationContext);
  return (
    <>
      <div
        className={`${
          isDarkTheme ? "bg-blue-700" : "bg-grey-200 "
        } rounded-md flex items-center justify-between px-8 py-4 relative shadow-lg w-[200px]`}
      >
        <button
          className={`${
            !isDarkTheme ? "text-blue-900" : "text-grey-200 "
          } w-full flex items-center justify-between relative z-10 font-semibold`}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selector}</span>
          <ArrowDownIcon isDarkTheme={isDarkTheme} />
        </button>
        <ul
          className={`absolute rounded-md shadow-lg left-0 w-full flex flex-col gap-3 pl-6 py-4 transition-all ${
            isDarkTheme ? "bg-blue-700" : "bg-grey-200 "
          } ${
            isOpen
              ? "top-[110%] opacity-100 pointer-events-auto"
              : "top-3/4 opacity-0 pointer-events-none"
          }`}
        >
          {" "}
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/all"}
              onClick={() => {
                setIsOpen(false);
                togglePagination(1);
                setSelector("All");
              }}
            >
              All
            </Link>
          </li>
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/region/africa"}
              onClick={() => {
                setSelector("Africa");
                setIsOpen(false);
                togglePagination(1);
              }}
            >
              Africa
            </Link>
          </li>
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/region/america"}
              onClick={() => {
                setIsOpen(false);
                togglePagination(1);
                setSelector("America");
              }}
            >
              America
            </Link>
          </li>
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/region/asia"}
              onClick={() => {
                setIsOpen(false);
                togglePagination(1);
                setSelector("Asia");
              }}
            >
              Asia
            </Link>
          </li>
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/region/europe"}
              onClick={() => {
                setIsOpen(false);
                togglePagination(1);
                setSelector("Europe");
              }}
            >
              Europe
            </Link>
          </li>
          <li
            className={`${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            } text-[16px] font-semibold`}
          >
            <Link
              to={"/region/oceania"}
              onClick={() => {
                setIsOpen(false);
                togglePagination(1);
                setSelector("Oceania");
              }}
            >
              Oceania
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RegionSelector;
