import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {HomePage,Marketplace,Stats,Community,Tokenomics} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/tokenomics",
        element: <Tokenomics />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
