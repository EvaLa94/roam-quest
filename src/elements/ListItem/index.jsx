import styles from "./style.module.scss";

export default function ListItem({ result }) {
  return (
    <div>
      <p>
        {result.name}
        <span
          className={"fi fi-" + result.address.countryCode.toLowerCase()}
        ></span>
      </p>
    </div>
  );
}
