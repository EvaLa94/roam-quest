import { FavoritesContext } from "@/contexts/favorites";
import AttractionItem from "@/elements/AttractionItem";
import CityItem from "@/elements/CityItem";
import { useContext } from "react";

import { container } from "./style.module.scss";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <section className={container}>
      <article className={container}>
        {favorites.cities.length > 0 && <h1>Favorite cities</h1>}
        {favorites.cities.map((data, index) => (
          <CityItem key={index} result={data.details} />
        ))}
      </article>

      <article className={container}>
        {favorites.attractions.length > 0 && <h1>Favorite attractions</h1>}
        {favorites.attractions.map((data, index) => (
          <AttractionItem key={index} result={data.details} />
        ))}
      </article>

      <article className={container}>
        {favorites.cities.length === 0 &&
          favorites.attractions.length === 0 && (
            <>
              <h1>Add your favorite cities and attractions!</h1>
              <p>They will be displayed here.</p>
            </>
          )}
      </article>
    </section>
  );
}
