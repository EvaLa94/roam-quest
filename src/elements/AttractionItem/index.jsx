import FavoritesIcon from "@/elements/FavoritesIcon";
import { capitalizeFirstLetter } from "@/services/capitalize";

import { container, header } from "./style.module.scss";

export default function AttractionItem({ result }) {
  return (
    <article className={container}>
      <div className={header}>
        <h2>{result.properties.name}</h2>
        <FavoritesIcon data={result.id} destination="attractions" />
      </div>
      <a href={`/attraction/${result.id}`}>More information</a>
      <p>Tags:</p>
      <ul>
        {result.properties.kinds.split(",").map((element, index) => (
          <li key={index}>
            {capitalizeFirstLetter(element).replaceAll("_", " ")}
          </li>
        ))}
      </ul>
    </article>
  );
}
