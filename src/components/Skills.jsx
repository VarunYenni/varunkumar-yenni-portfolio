import React from 'react';
import '../styles/Skills.css';
import {journeyItems, skillSet} from '../constants/constants.js'; // Ensure the CSS file is imported

const Skills = () => {
    return (
        <div className="dark-page">
            <div>
                <div className="stars"></div>
                <div className="torchlight"></div>
            </div>
            <div className="skills">
                <div className="experience">
                    <h1 className="experience-title">My Journey</h1>
                    <div className="experience-container">
                        {journeyItems.map((item, index) => (
                        <div className="experience-item" key={index}>
                                <div className="experience-title">
                                    <h2 className="experience-subtitle">{item.title}</h2>
                                    <img className="experience-image" src={item.image}  alt="image"/>
                                    <p className="experience-date">{item.year}</p>
                                </div>
                                <p className="experience-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills-container">
                    <h1 className="skills-title">Skills</h1>
                    <div className="skills-list">
                        {skillSet.map((item, index) => (
                            <div className="skill-item" key={index}>
                                <img className="skill-image" src={item.logo} alt={item.name} />
                                <h2 className="skill-name">{item.name}</h2>
                                <p className="skill-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;