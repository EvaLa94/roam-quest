import TokenProvider from "@/contexts/token";
import Search from "@/pages/Search";

import "./App.scss";

export default function App() {
  return (
    <>
      <TokenProvider>
        <Search />
      </TokenProvider>
    </>
  );
}
