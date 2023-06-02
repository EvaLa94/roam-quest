import { useState, useContext } from "react";

import attractions from "../../assets/attractions.svg";
import InputField from "../../elements/InputField";
import SearchButton from "../../elements/SearchButton";
import { getCities } from "../../services/cities";
import { MessageContext } from "../../contexts/message";
import { TokenContext } from "../../contexts/token";
import { CitiesContext } from "../../contexts/cities";
import {
  buttonContainer,
  container,
  inputContainer,
  disableSelect,
} from "./style.module.scss";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { token } = useContext(TokenContext);
  const { setMessage } = useContext(MessageContext);
  const { setCities } = useContext(CitiesContext);

  function handleSearch() {
    if (input.length >= 3) {
      getCities(token, input).then((data) => {
        if (data) {
          setCities(data);
        } else {
          setCities([]);
          setMessage("City not found");
        }
      });
    } else {
      setCities([]);
      setMessage("Search for a city");
    }

    document.querySelementectorAll("[type=search]").forEach((element) => {
      element.blur();
    });
  }

  return (
    <div className={container}>
      <div className={inputContainer}>
        <img src={attractions} className={disableSelect} />
        <InputField
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
        />
      </div>
      <div className={buttonContainer}>
        <SearchButton input={input} handleSearch={handleSearch} />
      </div>
    </div>
  );
}
