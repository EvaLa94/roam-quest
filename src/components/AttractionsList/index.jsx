import { container, main } from "./style.module.scss";
import { useLocation } from "react-router-dom";
import { AttractionsContext } from "@/contexts/attractions";
import { useContext, useEffect } from "react";
import { getAttractions } from "@/services/getAttractions";
import { TokenContext } from "@/contexts/token";
import AttractionItem from "../../elements/AttractionItem";

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
    <main className={main}>
      <h1>Attractions</h1>
      {attractions.data ? (
        <div className={container}>
          {attractions.data.map((result, index) => (
            <AttractionItem key={index} result={result} />
          ))}
        </div>
      ) : (
        <p>No data found. Try another city!</p>
      )}
    </main>
  );
}
