import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
    </Routes>
  </BrowserRouter>
);
export default App;
