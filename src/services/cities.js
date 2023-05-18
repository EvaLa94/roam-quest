export const getCities = async (token, input) => {
  return fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${input}`,
    {
      headers: {
        Authorization: await token,
      },
    }
  )
    .then((res) => res.json())
    .then(({ data }) => data);
};
