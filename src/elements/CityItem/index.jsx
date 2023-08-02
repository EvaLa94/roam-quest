import FavoritesIcon from "@/elements/FavoritesIcon";
import { countryCodes } from "@/services/country-codes";
import { Link } from "react-router-dom";

import { cityName, container, location } from "./style.module.scss";

export default function CityItem({ result }) {
  const favoritesData = {
    id: result.name,
    details: {
      ...result,
    },
  };

  return (
    <article className={container}>
      <span className={"fi fi-" + result.country.toLowerCase()}></span>
      <div className={location}>
        <Link
          className={cityName}
          to={`/attractions?latitude=${result.lat}&longitude=${result.lon}`}
        >
          {result.name}
        </Link>
        <p>{countryCodes(result.country)}</p>
      </div>
      <FavoritesIcon destination="cities" data={favoritesData} />
    </article>
  );
}
