import "./App.css";
import { Home } from "./Pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Compare } from "./Pages/compare";
import { Login } from "./Pages/login";

import { Register } from "./Pages/register";

import { Company } from "./Pages/company";
import { Profilesection } from "./Pages/profilesection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Company />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profilesection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
