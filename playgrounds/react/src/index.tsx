import React from "react";
import { createRoot } from "react-dom/client";
import { Select } from "@ds.e/react";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/global.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

root.render(
  <React.StrictMode>
    <Select options={options} />
  </React.StrictMode>
);
