import { createContext, useState } from "react";

export const AttractionsContext = createContext();

export default function AttractionsProvider({ children }) {
  const [attractions, setAttractions] = useState([]);

  return (
    <AttractionsContext.Provider value={{ attractions, setAttractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}
