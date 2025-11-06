import React, { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(""); // for success/error message

  // 👀 scroll animation
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
    observer.observe(document.querySelector("#contact"));
  }, []);

  // ✉️ send email with EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2ige4tl",  
        "template_zrko5jk", 
        formRef.current,
        "-1OO17f-ewaYJx2Sr"   
      )
      .then(
        () => {
          setStatus("sent");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg-glow"></div>

      <h2 className={`contact-title ${isVisible ? "fade-in" : ""}`}>
        Contact Me
      </h2>
      <div className="title-line"></div>

      <p className={`contact-text ${isVisible ? "fade-in" : ""}`}>
        Have a question or want to work together? Let’s connect!
      </p>

      {/* Contact form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className={`contact-form ${isVisible ? "fade-up" : ""}`}
      >
        <div className="form-group">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="success-msg">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-msg">❌ Something went wrong. Try again.</p>
        )}
      </form>

      {/* Social links */}
      <div className={`contact-socials ${isVisible ? "fade-up" : ""}`}>
        <a
          href="https://github.com/Uday-Misal"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/uday-misal-98287729a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
