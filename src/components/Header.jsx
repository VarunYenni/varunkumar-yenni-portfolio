import React, { useState } from 'react';
import vk from '../assets/vk.png';
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
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

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <a href="#about" className="neon-link" onClick={toggleMenu}>About</a>
                <a href="#skills" className="neon-link" onClick={toggleMenu}>Tech Galaxy</a>
                <a href="#contact" className="neon-link" onClick={toggleMenu}>Connect</a>
            </nav>
        </header>
    );
};

export default Header;