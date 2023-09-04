import axios from "axios";

export const getCities = async (input) => {
  const url = new URL("http://api.opentripmap.com/0.1/en/places/geoname");

  url.searchParams.append("name", input);
  url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);

  const { data } = await axios.get(url);

  return data;
};
