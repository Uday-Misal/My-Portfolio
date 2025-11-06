import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const EmailTest = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2ige4tl",   // e.g. service_qwe123
        "template_zrko5jk",  // e.g. template_abc456
        formRef.current,
        "-1OO17f-ewaYJx2Sr"    // e.g. Q7AxZY-xxxx
      )
      .then(
        () => {
          setStatus("✅ Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send email.");
        }
      );
  };

  return (
    <div style={{ padding: "40px", background: "#0b0b0b", color: "#00e0b8" }}>
      <h2>Test EmailJS</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px", height: "100px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Send
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default EmailTest;
