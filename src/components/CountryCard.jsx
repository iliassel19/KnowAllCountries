import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
const CountryCard = ({
  countryId,
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Link to={`/${countryId}`} className="block">
      <article
        data-country={countryId}
        className={`w-full h-[350px] transition-colors ${
          isDarkTheme ? "bg-blue-700" : "bg-grey-200"
        } shadow-lg rounded-[6px] overflow-hidden`}
      >
        <img
          src={countryFlag}
          alt={`${countryName} flag`}
          className="w-full h-[180px] bg-cover"
        />
        <div className="my-6 px-6">
          <h2
            className={`mb-2 text-lg font-bold transition-colors text-blue-900 ${
              !isDarkTheme ? "text-blue-900" : "text-grey-200"
            }`}
          >
            {countryName}
          </h2>
          <ul>
            <li
              className={`text-base transition-colors ${
                isDarkTheme ? "text-grey-200" : "text-blue-800"
              }`}
            >
              <span className="font-semibold">Population: </span>
              <span>{countryPopulation}</span>
            </li>
            <li
              className={`text-base transition-colors ${
                isDarkTheme ? "text-grey-200" : "text-blue-800"
              }`}
            >
              <span className="font-semibold">Region: </span>
              <span>{countryRegion}</span>
            </li>
            <li
              className={`text-base transition-colors ${
                isDarkTheme ? "text-grey-200" : "text-blue-800"
              }`}
            >
              <span className="font-semibold">Capital: </span>
              <span>{countryCapital}</span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
