import { createContext, useEffect, useState } from "react";

import { getToken } from "../services/token";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token === "" || token.expires_in === 0) {
      setToken(getToken());
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
}
