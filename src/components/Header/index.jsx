import { container, titleContainer } from "./style.module.scss";

export default function Header() {
  return (
    <header className={container}>
      <section>
        <h1 className={titleContainer}>Roam Quest</h1>
      </section>
    </header>
  );
}
