import React, { useEffect, useRef, useState } from "react";
import "../Styles/project.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const projects = [
    {
      title: "Gaming E-Commerce UI",
      desc: "A modern, responsive interface for a gaming gear store built with React and CSS.",
      tech: ["React", "CSS", "JS"],
      link: "#",
    },
    {
      title: "Chat App",
      desc: "Real-time chat application built with Node.js and Socket.io.",
      tech: ["Node.js", "Socket.io", "Express"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React showcasing projects and experience.",
      tech: ["React", "HTML", "CSS"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React showcasing projects and experience.",
      tech: ["React", "HTML", "CSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-bg-glow"></div>

      <h2 className={`projects-title ${isVisible ? "fade-in" : ""}`}>
        My Projects
      </h2>
      <div className="title-line"></div>

      <div className={`project-grid ${isVisible ? "fade-up" : ""}`}>
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tech-stack">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a href={p.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
