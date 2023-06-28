import React, { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import { useAsyncValue, useSearchParams } from "react-router-dom";
import CountryCard from "./CountryCard";
import Pagination from "./Pagination";
const Countries = () => {
  const { currentPage, togglePagination } = useContext(PaginationContext);

  let [searchParams, _] = useSearchParams();
  let query =
    searchParams.get("query") && searchParams.get("query").toLocaleLowerCase();
  const data = useAsyncValue();
  const countriesPerPage = 12;
  const lastPostIndex = currentPage * countriesPerPage;
  const firstPostIndex = lastPostIndex - countriesPerPage;

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,284px))] gap-6 lg:gap-12 mb-12 place-content-center">
        {query && query != "all"
          ? data
              .filter((country) =>
                country.name.common.toLowerCase().includes(query)
              )
              .slice(firstPostIndex, lastPostIndex)
              .map((data) => (
                <CountryCard
                  key={data.name.common}
                  countryCapital={data.capital}
                  countryFlag={data.flags.png}
                  countryPopulation={data.population}
                  countryRegion={data.region}
                  countryId={data.cca3}
                  countryName={data.name.common}
                ></CountryCard>
              ))
          : data
              .slice(firstPostIndex, lastPostIndex)
              .map((data) => (
                <CountryCard
                  key={data.name.common}
                  countryCapital={data.capital}
                  countryFlag={data.flags.png}
                  countryPopulation={data.population}
                  countryRegion={data.region}
                  countryId={data.cca3}
                  countryName={data.name.common}
                ></CountryCard>
              ))}
      </div>
      <Pagination
        totalCountries={data.length}
        countriesPerPage={countriesPerPage}
        activePage={currentPage}
        setCurrentPage={togglePagination}
      ></Pagination>
    </>
  );
};

export default Countries;
