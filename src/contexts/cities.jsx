import { defaultCities } from "@/services/default-cities";
import { createContext, useState } from "react";

export const CitiesContext = createContext();

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState(defaultCities());

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {children}
    </CitiesContext.Provider>
  );
}
