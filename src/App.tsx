import "./App.css";
import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, HomeLayout } from "./Layout";
import { Login, Register } from "./pages/Auth";
import Feed from "./pages/feed/Feed";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/home" element={<Feed />} />
        <Route path="/explore" element={<Feed />} />
        <Route path="/notification" element={<Feed />} />
        <Route path="/search" element={<Feed />} />
        <Route path="/chat" element={<Feed />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
