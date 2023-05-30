import { useContext, useEffect } from "react";

import { CitiesContext } from "../../contexts/cities";
import { MessageContext } from "../../contexts/message";
import { TokenContext } from "../../contexts/token";
import { getCities } from "../../services/cities";
import { button } from "./style.module.scss";

export default function SearchButton({ input }) {
  const { token } = useContext(TokenContext);
  const { setMessage } = useContext(MessageContext);
  const { setCities } = useContext(CitiesContext);

  useEffect(() => {
    setCities([]);
  }, []);

  function handleSubmit() {
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
  }

  return (
    <button className={button} type="submit" onClick={handleSubmit}>
      Search
    </button>
  );
}
