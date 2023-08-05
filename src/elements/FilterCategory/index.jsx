import { capitalizeFirstLetter } from "@/services/capitalize";
import { titleContainer, active, hidden, down, top } from "./style.module.scss";
import { useState } from "react";
import expand from "@/assets/expand.svg";

export default function FilterCategory({
  element,
  handleFilterChange,
  children,
  activeFilters,
}) {
  const [isHidden, setIsHidden] = useState("true");

  return (
    <article
      className={`${element}`}
      filtertype="group"
      id={element}
      onClick={(event) => {
        handleFilterChange(event);
      }}
    >
      <div className={titleContainer}>
        <h3
          filtertype="group"
          className={`${activeFilters.includes(element) && active}`}
        >
          {capitalizeFirstLetter(element).replaceAll("_", " ")}
        </h3>
        <img
          src={expand}
          onClick={() => {
            setIsHidden(!isHidden);
          }}
          className={isHidden ? top : down}
        />
      </div>

      <div className={isHidden ? hidden : undefined}>{children}</div>
    </article>
  );
}
