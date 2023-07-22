import TokenProvider from "@/contexts/token";
import RootRouter from "@/router/RootRouter";

import "./App.scss";

export default function App() {
  return (
    <>
      <TokenProvider>
        <RootRouter />
      </TokenProvider>
    </>
  );
}
