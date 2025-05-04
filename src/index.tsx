import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Route from "./route/index.tsx";

// Starting point of our project
// This is where the react app will be mounted The document.getElementById('root') finds an HTML element
//   with the ID root to serve asa a entery point
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <Route/>
  </StrictMode>
);
