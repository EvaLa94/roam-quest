import { createContext, useEffect, useState } from "react";

import { fetchToken } from "../services/token";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      setToken(fetchToken());
    }
    setTimeout(() => {
      setToken(null);
    }, 1799000);
  }, [token]);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
}
