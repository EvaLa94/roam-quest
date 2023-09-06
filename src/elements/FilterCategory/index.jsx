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
  const getChildrenId = (childrenList) => {
    return childrenList.map((child) => {
      if (Array.isArray(child)) {
        const childCategory = child[0];
        return [
          childCategory.key,
          ...getChildrenId(childCategory.props.children),
        ].flatMap((el) => el);
      }

      return child.key;
    });
  };

  const childrenIdList = getChildrenId(children).flatMap((el) => el);

  return (
    <article id={element}>
      <div className={titleContainer}>
        <h3
          className={`${activeFilters.includes(element) && active}`}
          onClick={() => {
            handleFilterChange([...childrenIdList, element]);
            console.log(childrenIdList);
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
