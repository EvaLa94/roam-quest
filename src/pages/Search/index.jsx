import CitiesList from "../../components/CitiesList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CitiesProvider from "../../contexts/cities";
import MessageProvider from "../../contexts/message";
import { body, listSection, searchContainer, searchSection } from "./style.module.scss";

export default function Search() {
  return (
    <div className={body}>
      <Header />
      <CitiesProvider>
        <MessageProvider>
          <div className={searchContainer}>
            <div className={searchSection}>
              <h1>What do you want to see and do?</h1>
              <h2>
                Discover new attractions and experiences to match your interests
                and travel style
              </h2>

              <SearchBar />
            </div>
          </div>
          <div>
            <div className={listSection}>
              <h2>Destinations</h2>
              <CitiesList />
            </div>
          </div>
        </MessageProvider>
      </CitiesProvider>
      <Footer />
    </div>
  );
}
