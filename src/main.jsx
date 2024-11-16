import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Hero/Hero.jsx";
import Cards from "./Cards/Cards.jsx";
import Detailcard from "./DetailCard/Detailcard.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import DelCart from "./DelCart/DelCart.jsx";
import Wishlist from "./Wishlist/Wishlist.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MAp from "./Map/MAp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("../data.json"),
    children: [
      {
        path: "/",
        element: <Hero />,
        loader: () => fetch("../data.json"),
        children: [
          {
            path: "/",
            element: <Cards />,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <Cards />,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      {
        path: "/:id",
        element: <Detailcard />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("../data.json"),
        children: [
          {
            path: "/dashboard",
            element: <DelCart />,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
            loader: () => fetch("../data.json"),
          },
        ],
      },

      {
        path: "/map",
        element: <MAp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
