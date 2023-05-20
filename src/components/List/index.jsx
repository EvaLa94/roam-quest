import styles from "./style.module.scss";
import ListItem from "../../elements/ListItem";

export default function List({ data }) {
  return (
    <div className={styles.container}>
      {data.map((result, index) => (
        <ListItem key={index} result={result} />
      ))}
    </div>
  );
}
