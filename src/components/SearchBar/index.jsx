import { useContext, useEffect, useState } from "react";

import attractions from "../../assets/attractions.svg";
import { TokenContext } from "../../contexts/token";
import InputField from "../../elements/InputField";
import SearchButton from "../../elements/SearchButton";
import { getCities } from "../../services/cities";
import {
  buttonContainer,
  container,
  inputContainer,
} from "./style.module.scss";

export default function SearchBar({ setMessage, setCities }) {
  const { token } = useContext(TokenContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length >= 3) {
      // Debounce
      const citiesData = setTimeout(() => {
        getCities(token, input).then((data) => {
          if (data) {
            setCities(data);
          } else {
            setCities([]);
            setMessage("City not found");
          }
        });
      }, 500);
      return () => clearTimeout(citiesData);
    } else {
      setCities([]);
      setMessage("Search for a city");
    }
  }, [input]);

  return (
    <div className={container}>
      <div className={inputContainer}>
        <img src={attractions} />
        <InputField input={input} setInput={setInput} />
      </div>
      <div className={buttonContainer}>
        <SearchButton />
      </div>
    </div>
  );
}
