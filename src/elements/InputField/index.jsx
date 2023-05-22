import styles from "./style.module.scss";

export default function InputField({ input, setInput }) {
  const handleChange = ({ target }) => setInput(target.value);
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
