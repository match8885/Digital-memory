import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import MemoryHakone from "./pages/MemoryHakone";
import MemoryKinugawa from "./pages/MemoryKinugawa";
import MemoryYokohama from "./pages/MemoryYokohama";
import MemoryYamanashi from "./pages/MemoryYamanashi";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/memory/hakone" element={<MemoryHakone />} />
        <Route path="/memory/kinugawa" element={<MemoryKinugawa />} />
        <Route path="/memory/yokohama" element={<MemoryYokohama />} />
        <Route path="/memory/yamanashi" element={<MemoryYamanashi />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
