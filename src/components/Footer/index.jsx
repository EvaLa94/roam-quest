import { container } from "./style.module.scss";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <section className={container}>
        <article>
          <p>Get in touch with me:</p>
        </article>
        <article>
          <a href="https://github.com/EvaLa94" target="_blank">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/eva-lateltin/" target="_blank">
            <img src={linkedin} />
          </a>
        </article>
      </section>
    </footer>
  );
}
