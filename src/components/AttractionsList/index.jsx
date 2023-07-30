import { AttractionsContext } from "@/contexts/attractions";
import { getAttractions } from "@/services/getAttractions";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import AttractionItem from "../../elements/AttractionItem";
import { container } from "./style.module.scss";

export default function AttractionsList() {
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);
  const latitude = parameters.get("latitude");
  const longitude = parameters.get("longitude");

  const { attractions, setAttractions } = useContext(AttractionsContext);

  useEffect(() => {
    getAttractions(latitude, longitude).then((data) => {
      setAttractions(data.features);
    });
  }, []);

  return (
    <main className={container}>
      {attractions.length > 0 ? (
        <section>
          <h1>Attractions</h1>
          {attractions.map((result, index) => (
            <AttractionItem key={index} result={result} />
          ))}
        </section>
      ) : (
        <p>No data found. Try another city!</p>
      )}
    </main>
  );
}
