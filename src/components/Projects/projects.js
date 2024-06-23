import React, { useState } from 'react';
import './projects.css';
import CS from '../../assets/portfolio-4.png';
import PP from '../../assets/portfolio-5.png';
import MQS from '../../assets/portfolio-6.png';

const projectsData = [
  {
    title: 'Career Swipe',
    description: `An advanced AI-powered job-hunting platform designed to enhance job seekers' visibility to recruiters. Initially developed for use at career fairs.`,
    techStack: 'Python, Django, Firebase Services, Google Generative AI API, HTML, CSS, TypeScript',
    githubLink: 'https://github.com/Nishchaypat/Career-Swipe-Backend',
    image: CS,
  },
  {
    title: 'Prediction on Point',
    description: `A sports prediction application developed during the HACK-Georgia Institute of Technology event in October 2023. Operates using Support Vector Machine model to predict Premier League game winners.`,
    techStack: 'Python, Swift',
    githubLink: 'https://github.com/Nishchaypat/Movie-Quote-Search-Backend',
    image: PP,
  },
  {
    title: 'Movie Quote Search',
    description: `A web-based tool that enables users to conveniently search for and explore movie quotes based on specific search terms. Developed using OpenAI's text-embedding-ada-002 model.`,
    techStack: 'Python, OpenAI API, HTML, CSS, JavaScript',
    githubLink: 'https://github.com/Nishchaypat/Movie-Quote-Search',
    image: MQS,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-desc">
          Explore some of the projects that highlight my skills and expertise.
        </p>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal">
              <button className="close-button" onClick={handleCloseModal}>×</button>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description}</p>
              <p className="modal-tech">
                <strong>Tech Stack:</strong> {selectedProject.techStack}
              </p>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        )}

        <a
          href="https://github.com/nishchaypat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">See More</button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
