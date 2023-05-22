import { useContext } from "react";

import ListItem from "../../elements/ListItem";
import { CityDataContext } from "../../pages/Search";
import styles from "./style.module.scss";

export default function List() {
  const { cityData } = useContext(CityDataContext);
  return (
    <div className={styles.container}>
      {cityData.map((result, index) => (
        <ListItem key={index} result={result} />
      ))}
    </div>
  );
}
