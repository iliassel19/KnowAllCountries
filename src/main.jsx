import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import CountriesPage, {
  loader as countriesLoader,
} from "./pages/CountriesPage.jsx";
import CountryPage from "./pages/CountryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
        loader: countriesLoader,
      },
      {
        path: "/:countrieId",
        element: <CountryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
