import React, { useState } from 'react';
import vk from '../assets/vk.webp';
import '../styles/Header.css';
import useClickOutside from "../customHooks/useClickOutside.js";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { ref, isOpen } = useClickOutside(false, setMenuOpen);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header" ref={ref}>
            <div className="logo">
                <img className="header-image" src={vk} alt="astr" />
            </div>

            <div
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span />
                <span />
                <span />
            </div>

            <nav className={`nav ${menuOpen || isOpen ? 'active' : ''}`}>
                <a href="#about" className="neon-link" onClick={toggleMenu}>About</a>
                <a href="#tech-galaxy" className="neon-link" onClick={toggleMenu}>Tech Galaxy</a>
                <a href="#connect" className="neon-link" onClick={toggleMenu}>Connect</a>
            </nav>
        </header>
    );
};

export default Header;