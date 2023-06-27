import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const CountryDetailsSkeleton = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <main className="px-6 sm:px-10 md:px-16 xl:px-0 xl:mx-auto max-w-7xl">
      <article className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center justify-between">
        <div
          className={`w-full h-[392px] animate-pulse ${
            isDarkTheme ? "bg-blue-900" : "bg-grey-400"
          }`}
        />

        <div className="w-full">
          <h2
            className={`text-3xl transition-colors font-bold mb-6 ${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            }`}
          ></h2>
          <div className="flex flex-col gap-8 sm:flex-row items-start sm:gap-16 lg:gap-28 xl:justify-between xl:gap-0">
            <ul className="flex flex-col gap-2">
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Native Name: </span>
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Population: </span>{" "}
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Region: </span>{" "}
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Sub Region: </span>{" "}
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Capital: </span>{" "}
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Top Level Domain: </span>{" "}
                <span
                  className={`w-28 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Currencies: </span>{" "}
                <span
                  className={`w-24 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
              <li
                className={`transition-colors text-base flex items-center gap-4 ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Languages: </span>
                <span
                  className={`w-24 rounded-sm h-4 animate-pulse ${
                    isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                  }`}
                ></span>
              </li>
            </ul>
          </div>
          <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 w-full md:mt-16">
            <li
              className={`transition-colors text-base font-semibold flex items-center ${
                isDarkTheme ? "text-grey-200" : "text-blue-800"
              }`}
            >
              Border Countries:{" "}
              <span
                className={`ml-4 w-28 rounded-sm h-4 animate-pulse ${
                  isDarkTheme ? "bg-blue-900" : "bg-grey-400"
                }`}
              ></span>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
};

export default CountryDetailsSkeleton;
