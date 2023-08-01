import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState({
    cities: [],
    attractions: [],
  });

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
