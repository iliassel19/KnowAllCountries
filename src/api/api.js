const URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const response = await fetch(`${URL}/all`);
  return await response.json();
};
export const getCountry = async (countryId) => {
  const response = await fetch(`${URL}/name/${countryId}`);
  return await response.json();
};

export const getCountryByRegion = async (region) => {
  const response = await fetch(`${URL}/region/${region}`);
  return await response.json();
};
