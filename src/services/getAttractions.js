export const getAttractions = async (token, latitude, longitude) => {
  return fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=${longitude}&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0`,
    {
      headers: {
        Authorization: await token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data);
};
