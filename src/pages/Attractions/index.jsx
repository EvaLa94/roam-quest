import AttractionsList from "@/components/AttractionsList";

import { container } from "./style.module.scss";

export default function Attractions() {
  return (
    <section className={container}>
      <AttractionsList />
    </section>
  );
}
