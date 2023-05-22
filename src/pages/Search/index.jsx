import { createContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import styles from "./style.module.scss";

export const CityDataContext = createContext(null);

export default function Search() {
  const [cityData, setCityData] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <div className={styles.body}>
      <Header />
      <CityDataContext.Provider value={{ cityData, setCityData }}>
        <div className={styles.searchContainer}>
          <div className={styles.searchSection}>
            <h1>What do you want to see and do?</h1>
            <h2>
              Discover new attractions and experiences to match your interests
              and travel style
            </h2>
            <SearchBar setMessage={setMessage} />
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
      </CityDataContext.Provider>
      <Footer />
    </div>
  );
}
