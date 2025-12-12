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
      title: "Smart-ATS-Resume-and-Portfolio-Builder",
      desc: "A web application that helps users create ATS-friendly resumes and portfolios with customizable templates and real-time previews.",
      tech: ["React", "CSS", "Node.js"],
      link: "https://github.com/Uday-Misal/Smart-ATS-Resume-and-Portfolio-Builder",
    },
    {
      title: "SportsAssissmentApp",
      desc: "An application designed to assess and track athletic performance through various tests and metrics.",
      tech: ["Node.js", "React", "MySql"],
      link: "https://github.com/Uday-Misal/SportsApp",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React showcasing projects and experience.",
      tech: ["React"],
      link: "https://github.com/Uday-Misal/My-Portfolio",
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
