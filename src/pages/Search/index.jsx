import { useState } from "react";

import CitiesList from "../../components/CitiesList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { body, listSection, searchContainer, searchSection } from "./style.module.scss";

export default function Search() {
  const [message, setMessage] = useState("");
  const [cities, setCities] = useState([]);

  return (
    <div className={body}>
      <Header />
      <div className={searchContainer}>
        <div className={searchSection}>
          <h1>What do you want to see and do?</h1>
          <h2>
            Discover new attractions and experiences to match your interests and
            travel style
          </h2>
          <SearchBar setMessage={setMessage} setCities={setCities} />
        </div>
      </div>
      <div>
        <div className={listSection}>
          <h2>Destinations</h2>
          <CitiesList message={message} cities={cities} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
