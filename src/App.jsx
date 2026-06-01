import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css'
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Game } from "./components/Game";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about/us" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}