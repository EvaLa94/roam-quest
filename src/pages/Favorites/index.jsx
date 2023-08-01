import { container } from "./style.module.scss";
import { FavoritesContext } from "@/contexts/favorites";
import { useContext } from "react";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  return <section className={container}></section>;
}
