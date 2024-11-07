import React from "react";
import { Route, Routes } from "react-router-dom"; // Updated import to use Routes
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
