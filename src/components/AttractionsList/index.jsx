import { getAttractions } from "@/services/getAttractions";
import { useLocation } from "react-router-dom";

import AttractionItem from "../../elements/AttractionItem";
import { container } from "./style.module.scss";

import { useQuery } from "@tanstack/react-query";

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
        <p>{isLoading && "Loading..."}</p>
        {attractions?.features.map((result, index) => (
          <AttractionItem key={index} result={result} />
        ))}
        <p>
          {attractions?.features.length === 0 &&
            "No data found. Try another city!"}
        </p>
        <p>{isError && "An error occured. Try again."}</p>
      </section>
    </main>
  );
}
