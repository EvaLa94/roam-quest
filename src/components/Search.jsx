import { useState, useEffect, useContext } from "react";
import ListItem from "./ListItem";
import { TokenContext } from "../App";

export default function Search() {
  const [cityData, setCityData] = useState([]);
  const [input, setInput] = useState("");
  const { token } = useContext(TokenContext);

  function handleChange(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${input}`,
        {
          headers: {
            Authorization: await token,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setCityData(res.data);
        });
    }

    input.length >= 3 ? fetchData() : setCityData([]);
  }, [input]);

  const noResults = <p>Search for a city</p>;
  const results = cityData.map((result, index) => (
    <ListItem key={index} result={result} />
  ));

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {cityData.length > 0 ? results : noResults}
    </>
  );
}
