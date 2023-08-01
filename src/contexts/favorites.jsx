import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
  const savedAttractions =
    JSON.parse(localStorage.getItem("attractions")) || [];

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
