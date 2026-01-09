import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoutes";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<DashBoard />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default App;
