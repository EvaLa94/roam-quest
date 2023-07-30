import { container } from "./style.module.scss";

export default function AttractionItem({ result }) {
  return (
    <article className={container}>
      <h2>{result.properties.name}</h2>
      <a href={`/attraction/${result.id}`}>More information</a>
      <p>Tags:</p>
      <ul>
        {result.properties.kinds.split(",").map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </article>
  );
}
