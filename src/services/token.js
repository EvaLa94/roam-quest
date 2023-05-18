export const getToken = () => {
  return fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`,
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => `${data.token_type} ${data.access_token}`);
};
