import { container } from "./style.module.scss";
import vacation from "@/assets/vacation.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className={container}>
      <img src={vacation} />
      <h1>Page not found!</h1>
      <p>
        Go back to the <Link goto="/">Homepage</Link>.
      </p>
    </main>
  );
}
