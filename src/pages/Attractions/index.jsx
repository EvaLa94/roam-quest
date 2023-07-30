import AttractionsList from "@/components/AttractionsList";
import AttractionsProvider from "@/contexts/attractions";

import { container } from "./style.module.scss";

export default function Attractions() {
  return (
    <AttractionsProvider>
      <section className={container}>
        <AttractionsList />
      </section>
    </AttractionsProvider>
  );
}
