import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Main from "./components/Main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Main></Main> */}
  </StrictMode>
);
