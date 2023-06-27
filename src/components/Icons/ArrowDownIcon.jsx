import React from "react";

const ArrowDownIcon = ({ isDarkTheme }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 64 80"
      x="0px"
      y="0px"
      className={`w-4 h-4 ${!isDarkTheme ? "fill-blue-900" : "fill-grey-200"}`}
    >
      <path d="M5.243 14.938c-0.941 0-1.896 0.366-2.61 1.080-1.429 1.429-1.429 3.792 0 5.221l26.741 26.741c0.69 0.69 1.664 1.080 2.61 1.080 0.937 0 1.871-0.341 2.61-1.080l26.704-26.706c1.496-1.408 1.515-3.827 0.086-5.256s-3.792-1.429-5.221 0c-0 0-0.001 0.001-0.001 0.001v0l-24.131 24.178-24.179-24.179c-0.715-0.715-1.67-1.080-2.61-1.080z" />
    </svg>
  );
};

export default ArrowDownIcon;
