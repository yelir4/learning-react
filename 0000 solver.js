// i think we can render stuff like this
console.log("hello");

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// this is the app we are testing
import App from "./0004 rendering lists";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);