import location from "@/assets/location.svg";
import FavoritesIcon from "@/elements/FavoritesIcon";
import { capitalizeFirstLetter } from "@/services/capitalize";

import { attractionInfo, container } from "./style.module.scss";

export default function AttractionCard({ information, id }) {
  const address = [
    information?.address?.pedestrian,
    information?.address?.house_number,
    information?.address?.city,
    information?.address?.country_code?.toUpperCase(),
  ]
    .filter(Boolean)
    .join(" - ");

  const favoritesData = {
    id: id,
    details: {
      id: id,
      properties: {
        name: information?.name,
        kinds: information?.kinds,
      },
      geometry: {
        coordinates: [information?.point?.lat, information?.point?.lon],
      },
    },
  };

  return (
    <section className={container}>
      {information?.name && <h1>{information.name}</h1>}
      <FavoritesIcon data={favoritesData} destination="attractions" />
      {information?.kinds && (
        <ul>
          {information.kinds.split(",").map((element, index) => (
            <li key={index}>
              {capitalizeFirstLetter(element).replaceAll("_", " ")}
            </li>
          ))}
        </ul>
      )}
      {information?.address && (
        <address>
          <img src={location} />
          <p>{address}</p>
        </address>
      )}
      {information?.preview?.source && (
        <article className={attractionInfo}>
          <img src={information.preview.source} />
          {information.wikipedia_extracts?.text && (
            <p>{information.wikipedia_extracts.text}</p>
          )}
        </article>
      )}
    </section>
  );
}
