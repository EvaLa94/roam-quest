import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

import { pageContainer } from "./style.module.scss";

export default function RootLayout() {
  return (
    <div className={pageContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
