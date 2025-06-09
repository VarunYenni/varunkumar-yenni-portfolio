import React from 'react';
import vk from '../assets/vk.png';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo"> <img className="header-image" src={vk} alt="astr" /></div>
            <nav className="nav">
                <a href="#about" className="neon-link">About</a>
                <a href="#skills" className="neon-link">Skills</a>
                <a href="#projects" className="neon-link">Contact</a>
            </nav>
        </header>
    );
};

export default Header;