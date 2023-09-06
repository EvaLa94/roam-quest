import FilterCategory from "@/elements/FilterCategory";
import FilterItem from "@/elements/FilterItem";
import { filterCategories } from "@/services/filter-categories";

import { container } from "./style.module.scss";

export default function FilterContainer({ activeFilters, setActiveFilters }) {
  const isFilterActive = (filter) => activeFilters.includes(filter);

  const handleFilterChange = (filterToAlter) => {
    try {
      if (filterToAlter.every(isFilterActive)) {
        setActiveFilters(
          activeFilters.filter((element) => !filterToAlter.includes(element))
        );
      } else {
        setActiveFilters([...activeFilters, ...filterToAlter]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const buildFilterContainer = (element) => {
    if (typeof element === "object" && !Array.isArray(element)) {
      const list = [];
      for (const [key, value] of Object.entries(element)) {
        list.push(
          <FilterCategory
            key={key}
            element={key}
            handleFilterChange={handleFilterChange}
            activeFilters={activeFilters}
          >
            {buildFilterContainer(value)}
          </FilterCategory>
        );
      }
      return list;
    }

    if (Array.isArray(element)) {
      return element.map((el) => buildFilterContainer(el));
    }

    if (typeof element === "string") {
      return (
        <FilterItem
          key={element}
          element={element}
          activeFilters={activeFilters}
          handleFilterChange={handleFilterChange}
        />
      );
    }
  };

  const filters = buildFilterContainer(filterCategories);

  return (
    <section className={container}>
      <h1>Filters</h1>
      {filters}
    </section>
  );
}
