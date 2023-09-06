import expand from "@/assets/expand.svg";
import { capitalizeFirstLetter } from "@/services/capitalize";
import { useState } from "react";

import { active, down, hidden, titleContainer, top } from "./style.module.scss";

export default function FilterCategory({
  element,
  handleFilterChange,
  children,
  activeFilters,
}) {
  const [isHidden, setIsHidden] = useState("true");
  const childrenId = children.map((child) => child.key);

  return (
    <article id={element}>
      <div className={titleContainer}>
        <h3
          className={`${activeFilters.includes(element) && active}`}
          onClick={() => {
            handleFilterChange([...childrenId, element]);
          }}
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
