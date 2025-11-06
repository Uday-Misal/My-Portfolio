import React from "react";
import "../Styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow-line"></div>

      <div className="footer-content">
        <h3 className="footer-name">Uday Misal</h3>
        <p className="footer-text">
          © {new Date().getFullYear()} — Designed & Built by Uday Misal
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-id/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
