import { createContext, useContext, useEffect, useState } from "react";

import { TokenContext } from "../../App";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import { getCities } from "../../services/cities";
import styles from "./style.module.scss";

export const SearchContext = createContext(null);

export default function Search() {
  const { token } = useContext(TokenContext);
  const [cityData, setCityData] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

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
    <div className={styles.body}>
      <Header />
      <SearchContext.Provider
        value={{ cityData, setCityData, input, setInput }}
      >
        <div className={styles.searchContainer}>
          <div className={styles.searchSection}>
            <h1>What do you want to see and do?</h1>
            <h2>
              Discover new attractions and experiences to match your interests
              and travel style
            </h2>
            <SearchBar />
          </div>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listSection}>
            <h2>Destinations</h2>
            {cityData.length > 0 ? (
              <List />
            ) : (
              <p className={styles.message}>{message}</p>
            )}
          </div>
        </div>
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}
