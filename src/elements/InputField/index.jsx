import { inputText } from "./style.module.scss";

export default function InputField({ input, setInput }) {
  const handleChange = ({ target }) => setInput(target.value);
  return (
    <input
      type="text"
      placeholder="Where are you going?"
      className={inputText}
      value={input}
      onChange={handleChange}
    />
  );
}
