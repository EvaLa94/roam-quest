import { container } from "./style.module.scss";

export default function AttractionItem({ result }) {
  return (
    <article className={container}>
      <h2>{result.name}</h2>
      <p>{result.category}</p>
      <p>Tags:</p>
      <ul>
        {result.tags.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </article>
  );
}
