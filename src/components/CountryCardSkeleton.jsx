import React from "react";

const CountryCardSkeleton = () => {
  return (
    <article className="w-[240px] h-[380px] bg-grey-200 shadow-lg rounded-[12px] overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-grey-400 h-[180px]"></div>
        <div className="my-8 px-5">
          <div className="w-3/4 h-4 rounded-sm bg-grey-400 mb-6"></div>
          <ul className="flex flex-col gap-4">
            <li className="w-full h-3 rounded-sm bg-grey-400"></li>
            <li className="w-full h-3 rounded-sm bg-grey-400"></li>
            <li className="w-full h-3 rounded-sm bg-grey-400"></li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CountryCardSkeleton;
