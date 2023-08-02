import { Link } from "react-router-dom";

import { container, header, link, title } from "./style.module.scss";

export default function Header() {
  return (
    <header className={header}>
      <section className={container}>
        <Link className={title} to="/">
          Roam Quest
        </Link>
        <Link className={link} to="/favorites">
          Your favorites
        </Link>
      </section>
    </header>
  );
}
