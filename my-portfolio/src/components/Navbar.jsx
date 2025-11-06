import React from "react";
import '../Styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Uday Misal</div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>); 
};
export default Navbar;