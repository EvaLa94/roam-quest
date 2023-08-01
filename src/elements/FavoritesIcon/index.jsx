import { FavoritesSvg } from "@/assets/FavoritesSvg";
import { FavoritesFilledSvg } from "@/assets/FavoritesFilledSvg";
import { FavoritesContext } from "@/contexts/favorites";
import { useContext } from "react";

import style from "./style.module.scss";

export default function FavoritesIcon({ destination, data }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorite = () => {
    setFavorites({
      ...favorites,
      [destination]: [...favorites[destination], data],
    });
  };

  const removeFavorite = () => {
    setFavorites({
      ...favorites,
      [destination]: favorites[destination].filter(
        (element) => element != data
      ),
    });
  };

  return favorites[destination].includes(data) ? (
    <span onClick={removeFavorite}>
      <FavoritesFilledSvg fill="red" height="25px" />
    </span>
  ) : (
    <span onClick={addFavorite}>
      <FavoritesSvg fill="red" height="25px" />
    </span>
  );
}
