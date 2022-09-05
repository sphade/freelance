import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout";
import { MyMusic, RecentPlays } from "./pages/App";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/music" element={<MyMusic />} />
        <Route path="/recentplays" element={<RecentPlays />} />
        <Route path="/playing" element={<MyMusic />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
