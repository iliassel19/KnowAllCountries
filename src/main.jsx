import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountryPage, { loader as countryLoader } from "./pages/CountryPage.jsx";
import CountriesByRegion, {
  loader as countriesByRegionLoader,
} from "./pages/CountriesByRegion";
import AllCountries, {
  loader as allCountriesLoader,
} from "./pages/AllCountriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CountriesPage />,
        children: [
          {
            path: "all",
            element: <AllCountries />,
            loader: allCountriesLoader,
          },

          {
            path: "region/:region",
            element: <CountriesByRegion />,
            loader: countriesByRegionLoader,
          },
        ],
      },
      {
        path: "/:countryId",
        element: <CountryPage />,
        loader: countryLoader,
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
