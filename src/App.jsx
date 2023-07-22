import TokenProvider from "@/contexts/token";
import Attractions from "@/pages/Attractions";
import Search from "@/pages/Search";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import "./App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Search />} />
      <Route path="attractions" element={<Attractions />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <TokenProvider>
        <RouterProvider router={router} />
      </TokenProvider>
    </>
  );
}
