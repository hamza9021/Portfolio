import React from 'react';
import './Projects.css';
import projectImage from "../assets/ROAMROSTER.png"

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src={projectImage} alt="Roam Roster Screenshot" className="project-image" />
        <div className="project-info">
          <h3>Roam Roster</h3>
          <p>ROAM ROSTER is an emerging, dynamic platform designed to simplify the process of booking rooms, bungalows, and houses. This project, currently in its early development stage, offers a robust foundation that prioritizes security, scalability, and ease of use.</p>
          <div className="project-links">
            <a href="https://roam-roster.onrender.com/listings" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            <a href="https://github.com/hamza9021/ROAM-ROSTER" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;