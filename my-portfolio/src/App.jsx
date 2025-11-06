import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />

      {/* Other components and content can be added here */}
    </div>
  );
}

export default App;