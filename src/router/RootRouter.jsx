import RootLayout from "@/layout/RootLayout";
import AttractionInfo from "@/pages/AttractionInfo";
import Attractions from "@/pages/Attractions";
import Favorites from '@/pages/Favorites'
import NotFound from "@/pages/NotFound";
import Search from "@/pages/Search";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

export default function RootRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Search />} />
        <Route path="attractions" element={<Attractions />} />
        <Route path="attraction/:id" element={<AttractionInfo />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
