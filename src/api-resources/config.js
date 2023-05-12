import { CLIENT_ID, CLIENT_SECRET } from "./api.js";

/**
 * Retrieve the token for the application fetch requests
 *
 * @returns {string} - Token
 */
export function GET_TOKEN() {
  let token = "";

  function FETCH_TOKEN() {
    if (token === "" || token.expires_in === 0) {
      token = fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => `${data.token_type} ${data.access_token}`);
    }
    return token;
  }

  return FETCH_TOKEN;
}
