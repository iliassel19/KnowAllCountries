import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const MoonIcon = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      className="w-6 h-6"
    >
      <path
        d="M75.075,64.591c-21.906,0-39.666-17.759-39.666-39.667c0-4.712,0.826-9.231,2.333-13.424  C22.442,17.003,11.5,31.638,11.5,48.833C11.5,70.741,29.259,88.5,51.167,88.5c17.195,0,31.83-10.942,37.333-26.242  C84.307,63.765,79.789,64.591,75.075,64.591z"
        className={`stroke-[8px] transition-colors fill-grey-200 ${
          isDarkTheme ? "stroke-grey-200" : "stroke-blue-900"
        }`}
      />
    </svg>
  );
};

export default MoonIcon;
