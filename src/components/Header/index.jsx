import styles from "./style.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.titleContainer}>Roam Quest</h1>
      </div>
    </header>
  );
}
