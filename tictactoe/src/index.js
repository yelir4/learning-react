// bridge between App.js and the web browser

// importing react
import React, { StrictMode } from "react";
// importing react's library to talk to web browsers (react DOM)
import { createRoot } from "react-dom/client";
// component styles
import "./styles.css";
// our component from `App.js`
import App from "./App";

// bring the pieces together,
// inject into `/public/index.html`
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);