import { button } from "./style.module.scss";

export default function SearchButton({ handleSearch }) {
  return (
    <button className={button} type="submit" onClick={handleSearch}>
      Search
    </button>
  );
}
