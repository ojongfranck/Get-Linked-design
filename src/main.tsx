import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import React from "react";
import "./index.css";
import { router } from "./pages/router";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
