export const getAttractionInfo = async (id) => {
  const url = new URL(`http://api.opentripmap.com/0.1/en/places/xid/${id}`);

  url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
