import { AttractionsContext } from "@/contexts/attractions";
import { TokenContext } from "@/contexts/token";
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
  const { token } = useContext(TokenContext);

  const { attractions, setAttractions } = useContext(AttractionsContext);

  useEffect(() => {
    getAttractions(token, latitude, longitude).then((data) => {
      setAttractions(data);
      console.log(data);
    });
  }, []);

  return (
    <main className={container}>
      {attractions.data ? (
        <section>
          <h1>Attractions</h1>
          {attractions.data.map((result, index) => (
            <AttractionItem key={index} result={result} />
          ))}
        </section>
      ) : (
        <p>No data found. Try another city!</p>
      )}
    </main>
  );
}
