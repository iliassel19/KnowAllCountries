export const extractCountryDetails = (country) => {
  const name = country.name.common;
  const nativeName = Object.values(country.name.nativeName)[0].common;
  const population = country.population.toLocaleString("en-us");
  const region = country.region;
  const subregion = country.subregion;
  const capital = country.capital ? country.capital[0] : "No capital";
  const flag = country.flags.svg;
  const languages = Array.from(Object.values(country.languages));
  const currencies = Array.from(Object.values(country.currencies))[0].name;
  const topLevelDomain = country.tld[0];
  const borderCountries = country.borders;

  return {
    nativeName,
    name,
    population,
    region,
    subregion,
    capital,
    flag,
    languages,
    currencies,
    topLevelDomain,
    borderCountries,
  };
};
