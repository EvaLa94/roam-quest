import { countryCodes } from "@/services/country-codes";
import { Link } from "react-router-dom";
import FavoritesIcon from "@/elements/FavoritesIcon";

import { cityName, container, location } from "./style.module.scss";

export default function ListItem({ result }) {
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
      <FavoritesIcon destination="cities" data={result.name} />
    </article>
  );
}
