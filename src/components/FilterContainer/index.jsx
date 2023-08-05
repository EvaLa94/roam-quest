import { container } from "./style.module.scss";
import { filterCategories } from "@/services/filter-categories";
import FilterItem from "@/elements/FilterItem";
import FilterCategory from "@/elements/FilterCategory";

export default function FilterContainer({ activeFilters, setActiveFilters }) {
  const isFilterActive = (filter) => activeFilters.includes(filter);

  const handleFilterChange = (event) => {
    try {
      const filterType = event.target.getAttribute("filtertype");
      let filterBatch;

      if (filterType === "single") {
        filterBatch = [event.target.closest("span").id];
      } else if (filterType === "group") {
        const target = event.target.closest("article");
        filterBatch = Array.from(
          [
            ...target.querySelectorAll("span"),
            ...target.querySelectorAll("article"),
            target,
          ],
          (element) => element.className
        );
      }
      if (filterBatch.every(isFilterActive)) {
        setActiveFilters(
          activeFilters.filter((element) => !filterBatch.includes(element))
        );
      } else {
        setActiveFilters([...activeFilters, ...filterBatch]);
      }
    } catch (err) {}
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

    if (typeof element === "object" && Array.isArray(element)) {
      const list = [];
      for (const el of element) {
        list.push(buildFilterContainer(el));
      }
      return list;
    }

    if (typeof element === "string") {
      return (
        <FilterItem
          key={element}
          element={element}
          activeFilters={activeFilters}
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
