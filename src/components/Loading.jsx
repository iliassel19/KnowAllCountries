import React from "react";
import CountryCardSkeleton from "./CountryCardSkeleton";
const Loading = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,284px))] gap-6 lg:gap-12 mb-12 place-content-center">
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
      <CountryCardSkeleton></CountryCardSkeleton>
    </div>
  );
};

export default Loading;
