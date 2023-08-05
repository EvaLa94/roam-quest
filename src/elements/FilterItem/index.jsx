import { capitalizeFirstLetter } from "@/services/capitalize";
import { active, container } from "./style.module.scss";

export default function FilterItem({ element, activeFilters }) {
  return (
    <span filtertype="single" className={element} id={element}>
      <p
        filtertype="single"
        className={`${activeFilters.includes(element) && active}`}
      >
        {capitalizeFirstLetter(element).replaceAll("_", " ")}
      </p>
    </span>
  );
}
