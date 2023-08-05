import AttractionsList from "@/components/AttractionsList";
import FilterContainer from "@/components/FilterContainer";
import { getAttractions } from "@/services/get-attractions";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  container,
  filtersContainer,
  attractionsContainer,
} from "./style.module.scss";

export default function Attractions() {
  const [activeFilters, setActiveFilters] = useState([]);
  const parameters = new URLSearchParams(useLocation().search);
  const latitude = parameters.get("latitude");
  const longitude = parameters.get("longitude");

  const {
    data: attractions,
    isLoading,
    isError,
  } = useQuery(["attractions", activeFilters], () => {
    return getAttractions(latitude, longitude, activeFilters)
      .then((data) => data)
      .catch(console.log);
  });

  return (
    <section className={container}>
      <section className={filtersContainer}>
        <FilterContainer
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </section>

      <section className={attractionsContainer}>
        <AttractionsList attractions={attractions} />
        <p>{isLoading && "Loading..."}</p>
        <p>{isError && "An error occured. Try again."}</p>
      </section>
    </section>
  );
}
