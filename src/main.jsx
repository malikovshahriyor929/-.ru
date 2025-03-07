import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import MainContext from "./context/mainContext/index.jsx";
import { ToastContainer } from "react-toastify";

//vercel deploy
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </MainContext>
  </StrictMode>
);
