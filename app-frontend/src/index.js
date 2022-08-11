import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./Routes/Inventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="inventory" element={<Inventory />} />
      <Route
        path="*"
        element={
          <div className="App">
            <h1>404 Not Found!</h1>
            <a href="/">Home</a>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
