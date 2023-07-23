import styles from "./style.module.scss";
import AttractionsProvider from "@/contexts/attractions";
import AttractionsList from "@/components/AttractionsList";

export default function Attractions() {
  return (
    <AttractionsProvider>
      <AttractionsList />
    </AttractionsProvider>
  );
}
