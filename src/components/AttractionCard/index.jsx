import { container, details } from "./style.module.scss";
import { capitalizeFirstLetter } from "@/services/capitalize";
import location from "@/assets/location.svg";

export default function AttractionCard({ information, id }) {
  const address = [
    information?.address?.pedestrian,
    information?.address?.house_number,
    information?.address?.city,
    information?.address?.country_code?.toUpperCase(),
  ]
    .filter(Boolean)
    .join(" - ");
  return (
    <section className={container}>
      {information?.name && <h1>{information.name}</h1>}
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
        <article className={details}>
          <img src={information.preview.source} />
          {information.wikipedia_extracts?.text && (
            <p>{information.wikipedia_extracts.text}</p>
          )}
        </article>
      )}
    </section>
  );
}

/*
<address>
          <img src={location} />
          {information.address.pedestrian && (
            <p>{information.address.pedestrian}</p>
          )}
          {information.address.house_number && (
            <p>{information.address.house_number}</p>
          )}
          {information.address.city && <p>{information.address.city}</p>}
          {information.address.country_code && (
            <p>{information.address.country_code.toUpperCase()}</p>
          )}
        </address>
*/
