import React, { useState } from "react";
import jsPDF from "jspdf";

function CoverLetterMaker() {
  const [form, setForm] = useState({ name: "", email: "", company: "", position: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text(`Name: ${form.name}`, 10, 20);
    pdf.text(`Email: ${form.email}`, 10, 30);
    pdf.text(`Company: ${form.company}`, 10, 40);
    pdf.text(`Position: ${form.position}`, 10, 50);
    pdf.text(`Message:`, 10, 60);
    pdf.text(form.message || "Dear Hiring Manager, ...", 10, 70, { maxWidth: 180 });
    pdf.save(`${form.name || "coverletter"}.pdf`);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Cover Letter Maker</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {["name","email","company","position","message"].map(field => (
          field === "message" ? (
            <textarea
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }}
            />
          ) : (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          )
        ))}
        <button
          onClick={downloadPDF}
          style={{ padding: "0.8rem", borderRadius: "6px", border: "none", backgroundColor: "#4F46E5", color: "#fff", cursor: "pointer" }}
        >
          Download Cover Letter
        </button>
      </div>
    </div>
  );
}

export default CoverLetterMaker;
