import React, { useEffect } from 'react';
import '../styles/hero.css';

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }

    // animate
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 224, 184, 0.2)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 224, 184, 0.5)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas id="particle-canvas"></canvas>

      <div className="hero-bg-shape"></div>
      <div className="hero-overlay-texture"></div>

      <div className="hero-content">
        <h1 className="hero-title">Uday Misal</h1>
        <div className="glow-line"></div>
        <p className="subtitle">Full Stack Developer • React & Node.js</p>
        <p className="quote">“Building ideas in the shadows.”</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
