import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Homepage from "./Pages/HomePage";
import PropertyTestPage from "./Pages/PropertyTestPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/test" element={<PropertyTestPage />} />
      <Route path="/detail" element={<DetailPage/>}/>
    </Routes>
  );
}

export default App;
