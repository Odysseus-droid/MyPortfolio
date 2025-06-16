"use client"

import "./App.css"
import myPhoto from "./LimPhoto.jpeg"
import myResume from "./LimResume.pdf"
import { useState } from "react"
import GitHubCalendar from "react-github-calendar"
import { GitlabIcon as GitHub, Linkedin, Mail, ExternalLink, Download, Menu, X } from "lucide-react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "BananaLyze",
      description:
        "Detects banana plant diseases using hyperspectral imaging + machine learning for early detection and targeted intervention in the Philippines.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Python", "Machine Learning", "Hyperspectral Imaging", "Computer Vision"],
      github: "https://github.com/yourusername/bananalyze",
      live: "#",
    },
    {
      title: "Malaria Trend Analysis",
      description:
        "Analyzes and predicts malaria cases (2000–2021) using supervised and unsupervised learning. Uses WHO data to cluster countries by trends and forecast case counts with KMeans and regression.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Python", "KMeans", "Regression", "WHO Data", "Data Analysis"],
      github: "https://github.com/Odysseus-droid/SupervisedLearningMalaria.git",
      live: "#",
    },
    {
      title: "CPU-GPU Case Study",
      description:
        "Investigates optimal hardware combinations for machine learning workloads by benchmarking various CPU-GPU setups.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Hardware Benchmarking", "Machine Learning", "Performance Analysis", "Python"],
      github: "https://github.com/yourusername/cpu-gpu-study",
      live: "#",
    },
  ]

  const skills = [
    "Python",
    "JavaScript",
    "Verilog",
    "TensorFlow",
    "scikit-learn",
    "React",
    "Node.js",
    "Packet Tracer",
    "Machine Learning",
    "Data Science",
    "Computer Vision",
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">John Odysseus Lim</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#github-activity" className="nav-link">
                GitHub Activity
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#github-activity" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                GitHub Activity
              </a>
              <a href="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#skills" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto hero-container">
          {/* Image container - LEFT SIDE */}
          <div className="hero-image-container">
            <img
              src={myPhoto || "/placeholder.svg"}
              alt="John Odysseus O. Lim"
              className="rounded-full border-4 border-blue-100 w-[180px] h-[180px] object-cover shadow-lg"
            />
          </div>

          {/* Text content container - RIGHT SIDE */}
          <div className="hero-text-container">
            <h1 className="text-4xl font-bold mb-2">John Odysseus O. Lim</h1>
            <h2 className="text-xl text-gray-600 mb-4">4th Year BS in Computer Engineering</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              I'm a Computer Engineering student specializing in Data Science. I'm passionate about Artificial
              Intelligence, Machine Learning, and solving real-world problems using technology. This portfolio showcases
              my work, skills, and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>
              <a href={myResume} download="John_Odysseus_Lim_Resume.pdf" className="btn-secondary">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                As a Computer Engineering student with a focus on Data Science, I bridge the gap between hardware
                understanding and software innovation. My passion lies in developing intelligent systems that can
                process and understand complex data patterns.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I specialize in machine learning algorithms, computer vision applications, and network analysis. My
                experience spans from low-level hardware design using Verilog to high-level AI applications using modern
                frameworks like TensorFlow and OpenCV.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding or studying, I enjoy exploring emerging technologies in AI, contributing to
                open-source projects, and sharing knowledge with fellow students and developers.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-gray-600">
                  <strong>BS Computer Engineering</strong>
                  <br />
                  4th Year Student
                  <br />
                  Specialization: Data Science & AI
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Vision</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Network Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github-activity" className="py-20 px-4 github-activity-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">GitHub Activity</h2>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">My Coding Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's a visual representation of my coding activity over the past year. Each square represents a day, and
              the color intensity shows how active I was on GitHub.
            </p>
          </div>

          <div className="github-calendar-container mb-8">
            <GitHubCalendar
              username="Odysseus-droid"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              style={{
                width: "100%",
              }}
            />
          </div>

          <div className="text-center">
            <a
              href="https://github.com/Odysseus-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <GitHub className="mr-2 h-4 w-4" />
              View My GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in new opportunities, research collaborations, and interesting projects. Let's
            connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:jhndyssslm@protonmail.com" className="btn-primary">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/jhndyssslm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Odysseus-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
