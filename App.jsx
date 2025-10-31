import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import GenerateResume from './pages/GenerateResume'
import Preview from './pages/Preview'
import About from './pages/About'
import Contact from './pages/Contact'
import Templates from './pages/Templates'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <div className="app-root">
      <nav className="topbar">
        <div className="brand">AI Resume Builder</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/generate">Create Resume</Link>
          <Link to="/preview">Live Preview</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/pricing">Plans</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateResume />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">Made with ❤️ by AI Resume Builder</footer>
    </div>
  )
}