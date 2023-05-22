import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../App";
import { CityDataContext } from "../../pages/Search";
import attractions from "../../assets/attractions.svg";
import InputField from "../../elements/InputField";
import SearchButton from "../../elements/SearchButton";
import styles from "./style.module.scss";
import { getCities } from "../../services/cities";

export default function SearchBar({ setMessage }) {
  const { token } = useContext(TokenContext);
  const { setCityData } = useContext(CityDataContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length >= 3) {
      // Debounce
      const cityList = setTimeout(() => {
        getCities(token, input).then((data) => {
          if (data) {
            setCityData(data);
          } else {
            setCityData([]);
            setMessage("City not found");
          }
        });
      }, 500);
      return () => clearTimeout(cityList);
    } else {
      setCityData([]);
      setMessage("Search for a city");
    }
  }, [input]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={attractions} />
        <InputField input={input} setInput={setInput} />
      </div>
      <SearchButton />
    </div>
  );
}
