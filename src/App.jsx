import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about/us" element={<About />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}