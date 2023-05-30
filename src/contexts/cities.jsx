import { createContext, useState } from "react";

export const CitiesContext = createContext();

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {children}
    </CitiesContext.Provider>
  );
}
