// src/routes/routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import JobRoles from "../pages/JobRoles";

export function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobRoles" element={<JobRoles />} />
      </Routes>
    </Router>
  );
}
