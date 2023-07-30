export const getCities = async (input) => {
  const url = new URL("http://api.opentripmap.com/0.1/en/places/geoname");

  url.searchParams.append("name", input);
  url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
