import { getAttractions } from "@/services/get-attractions";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import AttractionItem from "../../elements/AttractionItem";
import { container } from "./style.module.scss";

export default function AttractionsList() {
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);
  const latitude = parameters.get("latitude");
  const longitude = parameters.get("longitude");

  const {
    data: attractions,
    isLoading,
    isError,
  } = useQuery(["attractions"], () => {
    return getAttractions(latitude, longitude).then((data) => data);
  });

  return (
    <main className={container}>
      <section>
        <h1>Attractions</h1>
        {attractions?.features.map((result, index) => (
          <AttractionItem key={index} result={result} />
        ))}
        <p>{isLoading && "Loading..."}</p>
        <p>
          {attractions?.features.length === 0 &&
            "No data found. Try another city!"}
        </p>
        <p>{isError && "An error occured. Try again."}</p>
      </section>
    </main>
  );
}
