import AttractionItem from "@/elements/AttractionItem";

import { container } from "./style.module.scss";

export default function AttractionsList({ attractions }) {
  return (
    <main className={container}>
      <section>
        <h1>Attractions</h1>
        {attractions?.features.map((result, index) => (
          <AttractionItem key={index} result={result} />
        ))}
        <p>
          {attractions?.features.length === 0 &&
            "No data found. Try another city!"}
        </p>
      </section>
    </main>
  );
}
