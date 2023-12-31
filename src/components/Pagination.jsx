import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import ArrowRightIcon from "./Icons/ArrowRightIcon";
import ArrowLeft from "./Icons/ArrowLeft";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Pagination = ({
  totalCountries,
  countriesPerPage,
  setCurrentPage,
  activePage,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const [translateX, setTranslateX] = useState(0);
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const showMorePages = () => {
    setTranslateX((prev) => {
      if (prev > -totalPages) {
        return prev - 1;
      } else return -totalPages;
    });
  };
  const showPreviousPages = () => {
    console.log(translateX);
    setTranslateX((prev) => {
      if (Math.abs(prev) > 0) {
        return prev + 1;
      } else return 0;
    });
  };
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setTranslateX(0);
  }, [pathname]);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full flex items-center justify-center">
        {translateX !== -totalPages + 1 && (
          <button
            onClick={showMorePages}
            className={`absolute -right-6 top-1/2 z-[200] -translate-y-1/2 shadow-lg ${
              isDarkTheme ? "bg-blue-900" : "bg-grey-400"
            } w-12 h-12 rounded-full grid place-content-center`}
          >
            <ArrowRightIcon></ArrowRightIcon>
          </button>
        )}
        {Math.abs(translateX) > 0 && (
          <button
            onClick={showPreviousPages}
            className={`absolute -left-6 top-1/2 z-[200] -translate-y-1/2 shadow-lg ${
              isDarkTheme ? "bg-blue-900" : "bg-grey-400"
            }  w-12 h-12 rounded-full grid place-content-center`}
          >
            <ArrowLeft></ArrowLeft>
          </button>
        )}
        <div className="flex items-center w-full h-16 overflow-hidden">
          {pages.map((page, i) => (
            <Button
              key={i}
              onClick={() => {
                setCurrentPage(page);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              className={`transition-transform mr-2 w-20 ${
                activePage == page ? "activePage" : ""
              }`}
              style={translateX * 100}
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
