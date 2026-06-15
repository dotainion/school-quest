import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { QuestionDetails } from "./pages/QuestionDetails";
import { QuestionsFeed } from "./pages/QuestionsFeed";
import { Register } from "./pages/Register";
import { SchoolProfile } from "./pages/SchoolProfile";
import { SchoolsLeaderboard } from "./pages/SchoolsLeaderboard";
import { StudentProfile } from "./pages/StudentProfile";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about/us" element={<About />} />
                <Route path="/about/us" element={<Login />} />
                <Route path="/about/us" element={<QuestionDetails />} />
                <Route path="/about/us" element={<QuestionsFeed />} />
                <Route path="/about/us" element={<Register />} />
                <Route path="/about/us" element={<SchoolProfile />} />
                <Route path="/about/us" element={<SchoolsLeaderboard />} />
                <Route path="/about/us" element={<StudentProfile />} />
                <Route path="/about/us" element={<Login />} />
                <Route path="/about/us" element={<Login />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}