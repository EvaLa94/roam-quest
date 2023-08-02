import { FavoritesFilledSvg } from "@/assets/FavoritesFilledSvg";
import { FavoritesSvg } from "@/assets/FavoritesSvg";
import { FavoritesContext } from "@/contexts/favorites";
import { useContext } from "react";

import style from "./style.module.scss";

export default function FavoritesIcon({ destination, data }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorite = () => {
    const modifiedData = [...favorites[destination], data];

    localStorage.setItem(destination, JSON.stringify(modifiedData));

    setFavorites({
      ...favorites,
      [destination]: JSON.parse(localStorage.getItem(destination)),
    });
  };

  const removeFavorite = () => {
    const modifiedData = favorites[destination].filter(
      (element) => element.id != data.id
    );

    localStorage.setItem(destination, JSON.stringify(modifiedData));

    setFavorites({
      ...favorites,
      [destination]: JSON.parse(localStorage.getItem(destination)),
    });
  };

  return favorites[destination].map((el) => el.id).includes(data.id) ? (
    <span onClick={removeFavorite}>
      <FavoritesFilledSvg fill="red" height="25px" />
    </span>
  ) : (
    <span onClick={addFavorite}>
      <FavoritesSvg fill="red" height="25px" />
    </span>
  );
}
