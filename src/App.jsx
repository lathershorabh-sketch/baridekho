import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepages from "./Pages/Homepages";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Homepages />} />
    </Routes>
  );
}

export default App;
