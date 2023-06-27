import React, { useState } from "react";
import { getAllCountries } from "../api/api";
import { defer, useLoaderData } from "react-router-dom";
import Countries from "../components/Countries";

const AllCountries = () => {
  const { countries } = useLoaderData();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,284px))] gap-6 lg:gap-12 mb-12 place-content-center">
      <Countries countries={countries} />
    </div>
  );
};

export default AllCountries;
export const loader = async () => {
  const countries = getAllCountries();
  return defer({ countries });
};
