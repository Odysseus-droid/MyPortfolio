"use client"

import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import { GitlabIcon as GitHub, Linkedin, Mail, ExternalLink, Download, Menu, X } from "lucide-react"

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "TypeScript", "Firebase", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "API Integration", "Chart.js"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">John Doe</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <HashLink smooth to="#about" className="nav-link">About</HashLink>
              <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
              <HashLink smooth to="#skills" className="nav-link">Skills</HashLink>
              <HashLink smooth to="#contact" className="nav-link">Contact</HashLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <HashLink smooth to="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</HashLink>
              <HashLink smooth to="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projects</HashLink>
              <HashLink smooth to="#skills" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Skills</HashLink>
              <HashLink smooth to="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</HashLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full mx-auto mb-6 border-4 border-blue-100 dark:border-blue-900 w-[150px] h-[150px]"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Full Stack Developer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-friendly web applications using modern technologies. Passionate
            about clean code and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink
              smooth
              to="#projects"
              className="btn-primary"
            >
              View My Work
            </HashLink>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating web applications
                that solve real-world problems. I love working with modern technologies and constantly learning
                new skills to stay current with industry trends.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>mjolim@tip.edu.ph</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span>linkedin.com/in/jhndyssslm/</span>
              </div>
              <div className="flex items-center space-x-3">
                <GitHub className="h-5 w-5 text-blue-600" />
                <span>github.com/Odysseus-droid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <GitHub className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I'm always interested in new opportunities and interesting projects. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:john.doe@example.com"
              className="btn-primary"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio