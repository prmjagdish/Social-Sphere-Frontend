import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../dist/output.css";
import { ProfileProvider } from "./Context/ProfileContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </StrictMode>
);
