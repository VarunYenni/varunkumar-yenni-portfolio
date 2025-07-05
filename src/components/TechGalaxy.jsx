import React from 'react';
import '../styles/Skills.css';
import '../styles/Projects.css';
import Skills from '../helperComponents/Skills.jsx';
import Projects from '../helperComponents/Projects.jsx';

const TechGalaxy = () => {
    return (
        <div className="dark-page">
            <div>
                <div className="stars" />
                <div className="torchlight" />
            </div>
            <Skills/>
            <Projects />
        </div>
    );
};

export default TechGalaxy;