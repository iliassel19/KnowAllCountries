import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getCountry } from "../api/api";
import { extractCountryDetails } from "../utils/extractCountryDetails";
import CountryDetailsSkeleton from "../components/CountryDetailsSkeleton";
import CountryDetails from "../components/CountryDetails";
export const loader = async ({ params }) => {
  const country = getCountry(params.countryId);
  return defer({ country });
};
const CountryPage = () => {
  const { country } = useLoaderData();

  return (
    <Suspense fallback={<CountryDetailsSkeleton></CountryDetailsSkeleton>}>
      <Await resolve={country}>
        {(data) => {
          const details = extractCountryDetails(data[0]);
          return <CountryDetails {...details}></CountryDetails>;
        }}
      </Await>
    </Suspense>
  );
};

export default CountryPage;
