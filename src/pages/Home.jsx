import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "#f0f4f8" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>AI Resume Builder</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
        Transform your career with AI-powered resume optimization, live previews, customizable templates, and cover letter generation. Build your professional presence effortlessly.
      </p>
      <button
        onClick={() => navigate("/generateresume")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#4F46E5",
          color: "#fff",
          transition: "0.3s",
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#3b36b3"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#4F46E5"}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
