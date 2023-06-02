import { countryCodes } from "../../services/country-codes";
import { cityName, container, location } from "./style.module.scss";

export default function ListItem({ result }) {
  return (
    <div className={container}>
      <span
        className={"fi fi-" + result.address.countryCode.toLowerCase()}
      ></span>
      <div className={location}>
        <p className={cityName}>{result.name}</p>
        <p>{countryCodes(result.address.countryCode)}</p>
      </div>
    </div>
  );
}
