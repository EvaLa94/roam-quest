import { capitalizeFirstLetter } from "@/services/capitalize";

import { active, container } from "./style.module.scss";

export default function FilterItem({
  element,
  activeFilters,
  handleFilterChange,
}) {
  return (
    <p
      className={`${activeFilters.includes(element) && active}`}
      id={element}
      onClick={() => handleFilterChange([element])}
    >
      {capitalizeFirstLetter(element).replaceAll("_", " ")}
    </p>
  );
}
