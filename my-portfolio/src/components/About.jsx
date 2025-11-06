import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';
import profileImg from '../assets/uday.jpg'; // your image

const About = () => {
  const leftRef = useRef();
  const rightRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div
          className={`about-left ${isVisible ? 'slide-in-left' : ''}`}
          ref={leftRef}
        >
          <div className="img-border">
            <img src={profileImg} alt="Uday Misal" className="about-img" />
          </div>
        </div>

        <div
          className={`about-right ${isVisible ? 'slide-in-right' : ''}`}
          ref={rightRef}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m <span>Uday Misal</span>, a full stack web developer with a passion for building
            clean, responsive, and dynamic web applications using React and Node.js.
          </p>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript (ES6+)</li>
              <li>MySQL</li>
              <li>CSS & Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
