import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert("Message submitted!"); };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }}
        />
        <button type="submit" style={{ padding: "0.8rem", borderRadius: "6px", border: "none", backgroundColor: "#4F46E5", color: "#fff", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
