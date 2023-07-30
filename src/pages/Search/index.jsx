import CitiesList from "@/components/CitiesList";
import SearchBar from "@/components/SearchBar";
import CitiesProvider from "@/contexts/cities";
import MessageProvider from "@/contexts/message";

import { listSection, searchContainer, searchSection } from "./style.module.scss";

export default function Search() {
  return (
    <main>
      <CitiesProvider>
        <MessageProvider>
          <section className={searchContainer}>
            <article className={searchSection}>
              <h1>What do you want to see and do?</h1>
              <h2>
                Discover new attractions and experiences to match your interests
                and travel style
              </h2>
            </article>
            <SearchBar />
          </section>
          <section>
            <article className={listSection}>
              <h1>Destinations</h1>
            </article>
            <CitiesList />
          </section>
        </MessageProvider>
      </CitiesProvider>
    </main>
  );
}
