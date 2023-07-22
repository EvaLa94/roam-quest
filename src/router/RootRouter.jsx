import RootLayout from "@/layout/RootLayout";
import Attractions from "@/pages/Attractions";
import Search from "@/pages/Search";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export default function RootRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Search />} />
        <Route path="attractions" element={<Attractions />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
