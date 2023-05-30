import { useState } from "react";

import attractions from "../../assets/attractions.svg";
import InputField from "../../elements/InputField";
import SearchButton from "../../elements/SearchButton";
import {
  buttonContainer,
  container,
  inputContainer,
} from "./style.module.scss";

export default function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <div className={container}>
      <div className={inputContainer}>
        <img src={attractions} />
        <InputField input={input} setInput={setInput} />
      </div>
      <div className={buttonContainer}>
        <SearchButton input={input} />
      </div>
    </div>
  );
}
