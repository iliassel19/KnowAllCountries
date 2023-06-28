import React, { Suspense } from "react";
import { getAllCountries } from "../api/api";
import { defer, useLoaderData, Await } from "react-router-dom";
import Countries from "../components/Countries";

import Loading from "../components/Loading";
const AllCountries = () => {
  const { countries } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={countries}>
        <Countries />
      </Await>
    </Suspense>
  );
};

export default AllCountries;
export const loader = async () => {
  const countries = getAllCountries();
  return defer({ countries });
};
