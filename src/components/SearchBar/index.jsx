import attractions from "../../assets/attractions.svg";
import InputField from "../../elements/InputField";
import SearchButton from "../../elements/SearchButton";
import styles from "./style.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={attractions} />
        <InputField />
      </div>
      <SearchButton />
    </div>
  );
}
