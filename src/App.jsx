import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepages from "./Pages/Homepages";
import "./index.css";
import PropertyTestPage from "./Pages/PropertyTestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepages />} />
      <Route path="/test" element={<PropertyTestPage />} />
    </Routes>
  );
}

export default App;
