import { inputText } from "./style.module.scss";

export default function InputField({ input, setInput, handleSearch }) {
  const handleChange = ({ target }) => setInput(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Where are you going?"
        className={inputText}
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}
