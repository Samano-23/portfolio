import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contatti from "./components/Contatti";
import Formazione from "./components/Formazione";
import Esperienze from "./components/Esperienze";
import Progetti from "./components/Progetti";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/progetti" element={<Progetti />} />
          {/* Aggiungi altre rotte qui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
