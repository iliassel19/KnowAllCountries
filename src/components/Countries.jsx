import React, { Suspense } from "react";
import { Await, useSearchParams } from "react-router-dom";
import Loading from "./Loading";
import CountryCard from "./CountryCard";
const Countries = ({ countries }) => {
  let [searchParams, _] = useSearchParams();
  let query =
    searchParams.get("query") && searchParams.get("query").toLocaleLowerCase();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={countries}>
        {(data) => {
          return query && query != "all"
            ? data
                .filter((country) =>
                  country.name.common.toLowerCase().includes(query)
                )

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
            : data.map((data) => (
                <CountryCard
                  key={data.name.common}
                  countryCapital={data.capital}
                  countryFlag={data.flags.png}
                  countryPopulation={data.population}
                  countryRegion={data.region}
                  countryId={data.cca3}
                  countryName={data.name.common}
                ></CountryCard>
              ));
        }}
      </Await>
    </Suspense>
  );
};

export default Countries;
