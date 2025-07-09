import React from 'react';
import {projects} from '../constants/constants.jsx'

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-list">
                {
                    projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <img className="project-image" src={project.image} alt={project.title} />
                            <h1 className="project-title">{project.title}</h1>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                {project.gitLink && (
                                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub →</a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">Live →</a>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Projects;