import { createContext, useState, useMemo } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const savedCities = useMemo(
    () => JSON.parse(localStorage.getItem("cities")) || [],
    []
  );
  const savedAttractions = useMemo(
    () => JSON.parse(localStorage.getItem("attractions")) || [],
    []
  );

  const [favorites, setFavorites] = useState({
    cities: savedCities,
    attractions: savedAttractions,
  });

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
