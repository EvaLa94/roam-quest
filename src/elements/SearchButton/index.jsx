import styles from "./style.module.scss";

export default function SearchButton() {
  return (
    <button className={styles.button} type="submit">
      Search
    </button>
  );
}
