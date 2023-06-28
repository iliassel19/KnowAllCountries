import React from "react";
import { Link } from "react-router-dom";
const RegionSelectorItem = ({
  selectorId,
  selectorUrl,
  isDarkTheme,
  setIsOpen,
  togglePagination,
  setSelector,
}) => {
  return (
    <li
      className={`${
        isDarkTheme ? "text-grey-200" : "text-blue-900"
      } text-[16px] font-semibold`}
    >
      <Link
        to={selectorUrl}
        onClick={() => {
          setIsOpen(false);
          togglePagination(1);
          setSelector(selectorId);
        }}
      >
        {selectorId}
      </Link>
    </li>
  );
};

export default RegionSelectorItem;
