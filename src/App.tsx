import "./App.css";
import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/services/Services";
import LandingPage from "./pages/landingPage/LandingPage";
const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback="loading your data">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LandingPage />} />
        
        <Route path=":id" element={<Services />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
