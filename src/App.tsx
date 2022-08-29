import "./App.css";
import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Layout";
import { Login, Register } from "./pages/Auth";
import Feed from "./pages/feed/Feed";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route  element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/feed" element={<Feed />} />

    </Routes>
  </BrowserRouter>
);
export default App;
