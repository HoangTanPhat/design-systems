import React from "react";
import { createRoot } from "react-dom/client";
import { Color, Text } from "@ds.e/react";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/global.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Color hexCode="#000" />
  </React.StrictMode>
);
