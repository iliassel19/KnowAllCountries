import React, { Suspense } from "react";
import { getCountriesByRegion } from "../api/api";
import Loading from "../components/Loading";
import { useLoaderData, defer, Await } from "react-router-dom";
import Countries from "../components/Countries";
const CountriesByRegion = () => {
  const { countries } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={countries}>
        <Countries />
      </Await>
    </Suspense>
  );
};

export default CountriesByRegion;

export const loader = async ({ params }) => {
  const countries = getCountriesByRegion(params.region);
  return defer({ countries });
};
