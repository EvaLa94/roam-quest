import FavoritesProvider from "@/contexts/favorites";
import RootRouter from "@/router/RootRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.scss";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <RootRouter />
        </FavoritesProvider>
      </QueryClientProvider>
    </>
  );
}
