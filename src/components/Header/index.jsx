import { Link } from "react-router-dom";

import { titleContainer } from "./style.module.scss";

export default function Header() {
  return (
    <header>
      <section className={titleContainer}>
        <Link to="/">Roam Quest</Link>
      </section>
    </header>
  );
}
