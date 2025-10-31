import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import GenerateResume from "./pages/GenerateResume.jsx";
import Preview from "./pages/Preview.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Templates from "./pages/Templates.jsx";
import Pricing from "./pages/Pricing.jsx";
import CoverLetterMaker from "./shared/CoverLetterMaker.jsx";

function App() {
  const [themeColor, setThemeColor] = useState("#4F46E5"); // default primary color

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f5f6fa", color: "#333" }}>
      <header style={{ padding: "1rem 2rem", backgroundColor: themeColor, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontWeight: "700" }}>AI Resume Builder</h1>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["Home", "GenerateResume", "Preview", "Templates", "Pricing", "About", "Contact"].map(page => (
            <NavLink
              key={page}
              to={`/${page === "Home" ? "" : page.toLowerCase()}`}
              style={({ isActive }) => ({
                color: isActive ? "#FFD700" : "#fff",
                fontWeight: isActive ? "600" : "500",
                textDecoration: "none",
              })}
            >
              {page}
            </NavLink>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generateresume" element={<GenerateResume themeColor={themeColor} setThemeColor={setThemeColor} />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coverletter" element={<CoverLetterMaker />} />
      </Routes>

      <footer style={{ textAlign: "center", padding: "1.5rem", backgroundColor: "#222", color: "#fff" }}>
        &copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
