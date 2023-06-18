import { CitiesContext } from "@/contexts/cities";
import { useContext, useEffect } from "react";

import { button } from "./style.module.scss";

export default function SearchButton({ handleSearch }) {
  const { setCities } = useContext(CitiesContext);

  useEffect(() => {
    setCities([]);
  }, []);

  return (
    <button className={button} type="submit" onClick={handleSearch}>
      Search
    </button>
  );
}
