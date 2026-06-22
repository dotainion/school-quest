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
import { Layout } from "./layouts/Layout";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about/us" element={<About />} />
                    <Route path="/question/detail" element={<QuestionDetails />} />
                    <Route path="/question/feed" element={<QuestionsFeed />} />
                    <Route path="/school/profile" element={<SchoolProfile />} />
                    <Route path="/school/leader/boarad" element={<SchoolsLeaderboard />} />
                    <Route path="/student/profile" element={<StudentProfile />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}