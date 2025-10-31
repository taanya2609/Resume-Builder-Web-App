import React from "react";
import { templates } from "../utils/templateData.js";

function Templates() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Resume Templates</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {templates.map((t) => (
          <div
            key={t.id}
            style={{
              width: "250px",
              padding: "1rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={{ color: t.primaryColor }}>{t.name}</h3>
            <p style={{ fontSize: "0.9rem" }}>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
