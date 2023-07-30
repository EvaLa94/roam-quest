import attractions from "@/assets/attractions.svg";
import { CitiesContext } from "@/contexts/cities";
import { MessageContext } from "@/contexts/message";
import InputField from "@/elements/InputField";
import SearchButton from "@/elements/SearchButton";
import { getCities } from "@/services/cities";
import { useContext, useState } from "react";

import {
  buttonContainer,
  container,
  disableSelect,
  inputContainer,
} from "./style.module.scss";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { setMessage } = useContext(MessageContext);
  const { setCities } = useContext(CitiesContext);

  function handleSearch() {
    if (input.length >= 3) {
      getCities(input).then((data) => {
        if (!data.error) {
          setCities([data]);
        } else {
          setCities([]);
          setMessage("City not found");
        }
      });
    } else {
      setCities([]);
      setMessage("Search for a city");
    }
  }

  return (
    <section className={container}>
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
    </section>
  );
}
