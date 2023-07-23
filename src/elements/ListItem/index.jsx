import { countryCodes } from "@/services/country-codes";
import { cityName, container, location } from "./style.module.scss";
import { Link } from "react-router-dom";

export default function ListItem({ result }) {
  return (
    <article className={container}>
      <span
        className={"fi fi-" + result.address.countryCode.toLowerCase()}
      ></span>
      <div className={location}>
        <Link
          className={cityName}
          to={`/attractions?latitude=${result.geoCode.latitude}&longitude=${result.geoCode.longitude}`}
        >
          {result.name}
        </Link>
        <p>{countryCodes(result.address.countryCode)}</p>
      </div>
    </article>
  );
}
