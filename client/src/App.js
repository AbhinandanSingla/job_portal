import './App.css';
import {Home} from './Pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Compare} from "./Pages/compare";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/compare" element={<Compare/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
