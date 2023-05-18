import { useState, useEffect, useContext } from "react";
import List from "../components/List";
import { TokenContext } from "../App";
import { getCities } from "../services/cities";

export default function Search() {
  const { token } = useContext(TokenContext);
  const [cityData, setCityData] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => setInput(target.value);

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
    <>
      <input type="text" value={input} onChange={handleChange} />
      {cityData.length > 0 ? <List data={cityData} /> : <p>{message}</p>}
    </>
  );
}
