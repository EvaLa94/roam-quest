import { Link } from "react-router-dom";

import { header } from "./style.module.scss";

export default function Header() {
  return (
    <header className={header}>
      <Link to="/">Roam Quest</Link>
    </header>
  );
}
