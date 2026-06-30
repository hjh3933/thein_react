import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Timer from "./Timer.jsx";
import Counter from "./Counter.jsx";
import Timer2 from "./Timer2.jsx";
import { Component1 } from "./Component1.jsx";
import MyUseContext from "./MyUseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Timer />
    <hr />
    <Counter />
    <hr />
    <Timer2 />
    <hr />
    <Component1 />
    <hr />
    <MyUseContext />
  </StrictMode>,
);
