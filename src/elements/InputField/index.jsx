import { useContext } from "react";

import { SearchContext } from "../../pages/Search";
import styles from "./style.module.scss";

export default function InputField() {
  const handleChange = ({ target }) => setInput(target.value);
  const { input, setInput } = useContext(SearchContext);
  return (
    <input
      type="text"
      placeholder="Where are you going?"
      className={styles.input}
      value={input}
      onChange={handleChange}
    />
  );
}
