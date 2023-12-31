import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
const SearchIcon = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 75 100"
      xmlSpace="preserve"
      className={`w-8 h-8 ${isDarkTheme ? "fill-grey-200" : "fill-blue-800"}`}
    >
      <path d="M79.5,76.6L67.7,64.9c8.8-10.2,8.3-25.6-1.4-35.3C61.3,24.5,54.6,22,48,22s-13.3,2.5-18.4,7.6c-10.2,10.2-10.2,26.6,0,36.8  C34.6,71.4,41.3,74,48,74c6,0,12.1-2.1,16.9-6.3l11.8,11.8C77,79.8,77.5,80,78,80s1-0.2,1.4-0.6C80.2,78.7,80.2,77.4,79.5,76.6z   M32.4,63.5C28.2,59.4,26,53.8,26,48s2.3-11.4,6.4-15.6C36.6,28.2,42.1,26,48,26s11.4,2.3,15.6,6.4C67.7,36.6,70,42.1,70,48  s-2.3,11.4-6.4,15.6C59.4,67.7,53.8,70,48,70S36.6,67.7,32.4,63.5z" />
    </svg>
  );
};

export default SearchIcon;
