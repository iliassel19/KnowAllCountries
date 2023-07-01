import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useNavigate, Link } from "react-router-dom";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";
import Button from "./Button";
const CountryDetails = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  flag,
  languages,
  currencies,
  topLevelDomain,
  borderCountries,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const backHandler = () => {
    navigate(-1);
  };
  console.log(borderCountries);
  const navigate = useNavigate();
  return (
    <main className="px-6 sm:px-10 md:px-16 xl:px-0 xl:mx-auto max-w-7xl">
      <Button onClick={backHandler}>
        <ArrowLeftIcon />
        Back
      </Button>
      <article className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center justify-between">
        <img src={flag} alt={`${nativeName} flag`} className="w-full h-full" />

        <div className="w-full">
          <h2
            className={`text-3xl transition-colors font-bold mb-6 ${
              isDarkTheme ? "text-grey-200" : "text-blue-900"
            }`}
          >
            {name}
          </h2>
          <div className="flex flex-col gap-8 sm:flex-row items-start justify-between sm:gap-16">
            <ul className="flex flex-col gap-2">
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Native Name: </span>
                <span>{nativeName}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Population: </span>
                <span>{population}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Region: </span>
                <span>{region}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Sub Region: </span>
                <span>{subregion}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Capital: </span>
                <span>{capital}</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Top Level Domain: </span>
                <span>{topLevelDomain}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Currencies: </span>
                <span className="capitalize">{currencies}</span>
              </li>
              <li
                className={`transition-colors text-base ${
                  isDarkTheme ? "text-grey-200" : "text-blue-800"
                }`}
              >
                <span className="font-semibold">Languages: </span>
                <span>
                  {languages.map((language, i) => {
                    if (i + 1 === languages.length) return `${language}`;
                    else return `${language}, `;
                  })}
                </span>
              </li>
            </ul>
          </div>
          <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(80px,130px))] gap-3 w-full md:mt-16">
            <li
              className={`transition-colors text-base font-semibold flex items-center ${
                !borderCountries ? "col-span-4" : ""
              } ${isDarkTheme ? "text-grey-200" : "text-blue-800"}`}
            >
              Border Countries:
              {!borderCountries && (
                <span className="ml-2 capitalize text-base text-grey-400">
                  No border countries
                </span>
              )}
            </li>
            {borderCountries &&
              borderCountries.map((border) => (
                <Link
                  key={border}
                  className={`px-6 py-3 flex items-center justify-center gap-2 text-base capitalize transition-colors ${
                    isDarkTheme
                      ? "bg-blue-700 text-grey-200"
                      : "bg-grey-200 text-blue-800"
                  } shadow-md rounded-md font-semibold`}
                  to={`/${border}`}
                >
                  {border}
                </Link>
              ))}
          </ul>
        </div>
      </article>
    </main>
  );
};

export default CountryDetails;
