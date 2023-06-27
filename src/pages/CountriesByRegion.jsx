import React from "react";
import { getCountriesByRegion } from "../api/api";
import { useLoaderData, defer } from "react-router-dom";
import Countries from "../components/Countries";
const CountriesByRegion = () => {
  const { countries } = useLoaderData();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,284px))] gap-6 lg:gap-12 mb-12 place-content-center">
      <Countries countries={countries} />
    </div>
  );
};

export default CountriesByRegion;

export const loader = async ({ params }) => {
  const countries = getCountriesByRegion(params.region);
  return defer({ countries });
};
