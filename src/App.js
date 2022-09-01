import "./App.css";

import { Routes, Route } from "react-router-dom";

import Locations from "./Pages/Locations";
import Residents from "./Pages/Residents";
import Layout from "./Pages/Layout";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Locations />} />
          <Route path="home" element={<Locations />} />
          <Route path="location/:id" element={<Residents />} />
      
        </Route>
      </Routes>
    </div>
  );
}
