export const getAttractions = async (latitude, longitude, kinds = []) => {
  const url = new URL("http://api.opentripmap.com/0.1/en/places/radius");

  url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);
  url.searchParams.append("lat", +latitude);
  url.searchParams.append("lon", +longitude);
  url.searchParams.append("radius", 500);
  kinds.length > 0 && url.searchParams.append("kinds", kinds.join(","));

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
