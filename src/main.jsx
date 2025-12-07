import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import ProfileProvider  from "@context/ProfileProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </StrictMode>
);
