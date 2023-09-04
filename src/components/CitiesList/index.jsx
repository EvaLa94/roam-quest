import { CitiesContext } from "@/contexts/cities";
import { MessageContext } from "@/contexts/message";
import CityItem from "@/elements/CityItem";
import { useContext } from "react";

import { container, messageParagraph } from "./style.module.scss";

export default function CitiesList() {
  const { message } = useContext(MessageContext);
  const { cities } = useContext(CitiesContext);

  if (cities.length === 0) {
    return <p className={messageParagraph}>{message}</p>;
  }

  return (
    <>
      <div className={container}>
        {cities.map((result, index) => (
          <CityItem key={index} result={result} />
        ))}
      </div>
    </>
  );
}
