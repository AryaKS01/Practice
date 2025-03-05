import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Timer from "./Timer.jsx";
import FetchApi from "./FetchApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FetchApi /> */}
    {/* <Timer></Timer> */}
  </StrictMode>
);
