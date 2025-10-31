import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../index.css";

function GenerateResume() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    profile:
      "Innovative software engineer with 5+ years of experience building scalable web applications and leading development teams.",
    education: [
      { degree: "B.Tech in Computer Science", institution: "Mumbai University", year: "2020" },
    ],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "TechCorp Pvt. Ltd.",
        duration: "2022 - Present",
        details: [
          "Lead a team of 5 developers building enterprise-level SaaS solutions",
          "Optimized backend services, reducing API latency by 35%",
        ],
      },
    ],
    projects: [
      {
        title: "AI Resume Builder",
        description:
          "A smart web app that generates professional resumes optimized for ATS using AI-driven suggestions.",
      },
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Docker", "Python"],
    achievements: ["Winner of HackathonX 2022", "Published 2 research papers"],
    hobbies: ["Photography", "Cricket", "Reading"],
  });

  const [themeColor, setThemeColor] = useState("#2c3e50");
  const [layout, setLayout] = useState("professional");

  // Form updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value.split(",").map((item) => item.trim()),
    }));
  };

  // PDF Download
  const handleDownloadPDF = () => {
    const input = document.getElementById("resume-preview");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.name.replace(" ", "_")}_${layout}_Resume.pdf`);
    });
  };

  return (
    <div className="resume-builder-container">
      {/* Sidebar Editor */}
      <div className="editor-panel">
        <h2>✍ Edit Resume</h2>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          LinkedIn:
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>
        <label>
          GitHub:
          <input type="text" name="github" value={formData.github} onChange={handleChange} />
        </label>
        <label>
          Profile Summary:
          <textarea name="profile" value={formData.profile} onChange={handleChange}></textarea>
        </label>
        <label>
          Skills (comma separated):
          <input
            type="text"
            value={formData.skills.join(", ")}
            onChange={(e) => handleArrayChange(e, "skills")}
          />
        </label>
        <label>
          Hobbies (comma separated):
          <input
            type="text"
            value={formData.hobbies.join(", ")}
            onChange={(e) => handleArrayChange(e, "hobbies")}
          />
        </label>
        <label>
          Theme Color:
          <input
            type="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <label>
          Layout Style:
          <select value={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="professional">Professional</option>
            <option value="modern">Modern</option>
            <option value="creative">Creative</option>
            <option value="minimalist">Minimalist</option>
            <option value="elegant">Elegant</option>
          </select>
        </label>
        <button className="btn-primary" onClick={handleDownloadPDF}>
          ⬇ Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div
        id="resume-preview"
        className={`resume-preview layout-${layout}`}
        style={{ "--primary": themeColor }}
      >
        {/* PROFESSIONAL Layout */}
        {layout === "professional" && (
          <>
            <header className="resume-header">
              <h1>{formData.name}</h1>
              <h3>{formData.title}</h3>
              <p>
                {formData.email} | {formData.phone} | {formData.linkedin} |{" "}
                {formData.github}
              </p>
            </header>
            <section>
              <h2>Profile</h2>
              <p>{formData.profile}</p>
            </section>
            <section>
              <h2>Skills</h2>
              <div className="skills">
                {formData.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2>Hobbies</h2>
              <p>{formData.hobbies.join(", ")}</p>
            </section>
          </>
        )}

        {/* MODERN Layout */}
        {layout === "modern" && (
          <div className="modern-layout">
            <aside className="sidebar" style={{ background: themeColor }}>
              <h2>{formData.name}</h2>
              <h4>{formData.title}</h4>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{formData.linkedin}</p>
              <p>{formData.github}</p>
              <h3>Skills</h3>
              <ul>
                {formData.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </aside>
            <main className="content">
              <section>
                <h2>Profile</h2>
                <p>{formData.profile}</p>
              </section>
              <section>
                <h2>Experience</h2>
                {formData.experience.map((exp, i) => (
                  <div key={i}>
                    <h4>{exp.role} @ {exp.company}</h4>
                    <p>{exp.duration}</p>
                    <ul>
                      {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                    </ul>
                  </div>
                ))}
              </section>
            </main>
          </div>
        )}

        {/* CREATIVE Layout */}
        {layout === "creative" && (
          <div className="creative-layout">
            <header style={{ background: themeColor, color: "white" }}>
              <h1>{formData.name}</h1>
              <h3>{formData.title}</h3>
            </header>
            <section>
              <h2>About Me</h2>
              <p>{formData.profile}</p>
            </section>
            <section>
              <h2>Projects</h2>
              {formData.projects.map((p, i) => (
                <div key={i}>
                  <strong>{p.title}</strong>
                  <p>{p.description}</p>
                </div>
              ))}
            </section>
            <footer>
              <p>
                {formData.email} | {formData.phone} | {formData.linkedin} |{" "}
                {formData.github}
              </p>
            </footer>
          </div>
        )}

        {/* MINIMALIST Layout */}
        {layout === "minimalist" && (
          <div className="minimalist-layout">
            <h1>{formData.name}</h1>
            <h3 style={{ color: themeColor }}>{formData.title}</h3>
            <p>
              {formData.email} | {formData.phone}
            </p>
            <section>
              <h2>Profile</h2>
              <p>{formData.profile}</p>
            </section>
            <section>
              <h2>Education</h2>
              {formData.education.map((edu, i) => (
                <p key={i}>
                  {edu.degree}, {edu.institution} ({edu.year})
                </p>
              ))}
            </section>
          </div>
        )}

        {/* ELEGANT Layout */}
        {layout === "elegant" && (
          <div className="elegant-layout">
            <header>
              <h1 style={{ color: themeColor }}>{formData.name}</h1>
              <h3>{formData.title}</h3>
            </header>
            <section>
              <h2>Achievements</h2>
              <ul>
                {formData.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </section>
            <section>
              <h2>Experience</h2>
              {formData.experience.map((exp, i) => (
                <div key={i}>
                  <h4>{exp.role}</h4>
                  <p>{exp.company} | {exp.duration}</p>
                </div>
              ))}
            </section>
            <footer>
              <p>📧 {formData.email} | ☎ {formData.phone}</p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateResume;
