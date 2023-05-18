import "./App.css";
import Search from "./pages/Search";
import { useState, useEffect, createContext } from "react";
import { getToken } from "./services/token";

export const TokenContext = createContext(null);

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token === "" || token.expires_in === 0) {
      setToken(getToken());
    }
  }, []);

  return (
    <>
      <TokenContext.Provider value={{ token }}>
        <Search />
      </TokenContext.Provider>
    </>
  );
}
