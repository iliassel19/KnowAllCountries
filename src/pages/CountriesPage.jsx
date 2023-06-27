import React, { useState, useContext } from "react";
import { getAllCountries } from "../api/api";
import {
  defer,
  useLocation,
  Outlet,
  Link,
  useSearchParams,
} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import RegionSelector from "../components/RegionSelector";
import SearchIcon from "../components/Icons/SearchIcon";
export const loader = async () => {
  const countries = getAllCountries();
  return defer({ countries });
};

const CountriesPage = () => {
  let [_, setSearchParams] = useSearchParams();

  const { pathname } = useLocation();
  const { isDarkTheme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const handleSearchSubmition = (e) => {
    e.preventDefault();
    if (query == "") {
      setSearchParams({ query: "all" });
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <main className="px-8 md:px-16 xl:px-0 xl:mx-auto max-w-7xl">
      {pathname !== "/" && (
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <form
            onSubmit={handleSearchSubmition}
            className={`${
              isDarkTheme ? "bg-blue-700" : "bg-grey-200 "
            } rounded-lg flex items-center gap-4 px-6 relative shadow-lg w-full md:w-[460px] h-[56px]`}
          >
            <SearchIcon></SearchIcon>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country ..."
              className={`bg-[transparent] md:flex-[1] focus:outline-none font-semibold ${
                isDarkTheme
                  ? "text-grey-200 placeholder:text-grey-300 placeholder:opacity-70"
                  : "placeholder:text-grey-400 text-blue-800"
              }`}
            />
          </form>
          <RegionSelector></RegionSelector>
        </div>
      )}
      {pathname === "/" && (
        <Link
          to={"/all"}
          className="bg-grey-200 px-8 py-4 font-semibold text-blue-900 shadow-lg rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Show All Countries
        </Link>
      )}

      <Outlet />
    </main>
  );
};

export default CountriesPage;
