import { countryCodes } from "../../services/country-codes";
import styles from "./style.module.scss";

export default function ListItem({ result }) {
  return (
    <div className={styles.container}>
      <span
        className={"fi fi-" + result.address.countryCode.toLowerCase()}
      ></span>
      <div className={styles.location}>
        <p className={styles.cityName}>{result.name}</p>
        <p>{countryCodes[result.address.countryCode]}</p>
      </div>
    </div>
  );
}
