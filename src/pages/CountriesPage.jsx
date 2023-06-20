import React, { Suspense } from "react";
import { getAllCountries } from "../api/api";
import { defer, useLoaderData, Await } from "react-router-dom";
import CountryCard from "../components/CountryCard";
export const loader = async () => {
  const countries = await getAllCountries();
  return defer({ countries });
};

import CountryCardSkeleton from "../components/CountryCardSkeleton";

const CountriesPage = () => {
  const { countries } = useLoaderData();
  return (
    <main className="mx-auto max-w-7xl">
      <Suspense fallback={<p>Loading Countries ...</p>}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12">
          <Await resolve={countries}>
            {(data) =>
              data
                .slice(0, 8)
                .map((data) => (
                  <CountryCard
                    key={data.name.common}
                    countryCapital={data.capital}
                    countryFlag={data.flags.png}
                    countryPopulation={data.population}
                    countryRegion={data.region}
                    countryId={data.name.common.toLowerCase().split(" ")[0]}
                    countryName={data.name.common}
                  ></CountryCard>
                ))
            }
          </Await>
        </div>
      </Suspense>
    </main>
  );
};

export default CountriesPage;
