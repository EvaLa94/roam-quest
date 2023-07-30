import { container } from "./style.module.scss";
import { capitalizeFirstLetter } from "../../services/capitalize";

export default function AttractionItem({ result }) {
  return (
    <article className={container}>
      <h2>{result.properties.name}</h2>
      <a href={`/attraction/${result.id}`}>More information</a>
      <p>Tags:</p>
      <ul>
        {result.properties.kinds.split(",").map((element, index) => (
          <li key={index}>
            {capitalizeFirstLetter(element).replace("_", " ")}
          </li>
        ))}
      </ul>
    </article>
  );
}
