import "./App.css";
import Search from "./components/Search";
import { createContext } from "react";
import { GET_TOKEN } from "./api-resources/config";

const getToken = GET_TOKEN();
const token = getToken();

export const TokenContext = createContext(token);
export default function App() {
  return (
    <>
      <TokenContext.Provider value={{ token }}>
        <Search />
      </TokenContext.Provider>
    </>
  );
}
