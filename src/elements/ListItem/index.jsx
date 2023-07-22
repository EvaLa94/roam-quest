import { countryCodes } from "@/services/country-codes";
import { cityName, container, location } from "./style.module.scss";

export default function ListItem({ Attractions }) {
  return (
    <article className={container}>
      <span
        className={"fi fi-" + Attractions.address.countryCode.toLowerCase()}
      ></span>
      <div className={location}>
        <p className={cityName}>{Attractions.name}</p>
        <p>{countryCodes(Attractions.address.countryCode)}</p>
      </div>
    </article>
  );
}
