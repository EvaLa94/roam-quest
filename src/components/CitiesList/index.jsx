import ListItem from "../../elements/ListItem";
import { container, messageParagraph } from "./style.module.scss";

export default function CitiesList({ message, cities }) {
  return (
    <>
      {cities.length > 0 ? (
        <div className={container}>
          {cities.map((result, index) => (
            <ListItem key={index} result={result} />
          ))}
        </div>
      ) : (
        <p className={messageParagraph}>{message}</p>
      )}
    </>
  );
}
