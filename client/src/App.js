import "./App.css";
import { Home } from "./Pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Compare } from "./Pages/compare";
import { Login } from "./Pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
