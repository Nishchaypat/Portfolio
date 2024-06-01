import React, { useState } from 'react';
import './projects.css';
import CS from '../../assets/portfolio-4.png';
import PP from '../../assets/portfolio-5.png';
import MQS from '../../assets/portfolio-6.png';

const Project = ({ imgSrc, description, onClick }) => {
  return (
    <div className="project" onClick={onClick}>
      <div className="project-inner">
        <div className="project-front">
          <img src={imgSrc} alt="" className='projectsImg' />
        </div>
        <div className="project-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ selectedProject, onClose }) => (
  <div className="modal" onClick={onClose}>
    <button className="close-button" onClick={onClose}>×</button>
    <div className="modal-content">
      <div className="project flipped">
        <div className="project-inner modal-inner">
          <div className="project-front">
            <img src={selectedProject.imgSrc} alt="" className='projectsImg' />
          </div>
          <div className="project-back">
            {selectedProject.description}
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
      <h2 className='projectsTitle'>My Projects</h2>
      <span className='projectsDesc'>The following projects highlight my primary skills and demonstrate my capabilities across various domains.</span>
      <div className='projectsImgs'>
        <Project imgSrc={CS} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: CS, description: (
          <div className='DESC'>
          <p>
            <strong>Career Swipe is an advanced AI-powered job-hunting platform designed to enhance job seekers' visibility to recruiters. Initially developed for use at career fairs, it has since expanded to support a broader range of recruitment activities.</strong>
          <ul>
            <br></br>
          <li>An advanced AI-powered job-hunting site, spotlighting the employee to various recruiters, initially focused to be used at career fairs. <br></br></li>
          <li>The web service also provides resume insights and improvement suggestions to the job seeker, improving their chance to stand out. <br></br></li>
          <br></br>
          <li><strong>Tech Stack:</strong> Python, Django, Firebase Services, Google Generative AI API, HTML, CSS, TypeScript </li>
          </ul>
          <br></br>
          <a href='https://github.com/Nishchaypat/Career-Swipe-Backend' target='_blank' rel='noopener noreferrer'> Github </a>
          </p>
          </div>
        )})} />
        <Project imgSrc={PP} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: CS, description: (
          <div className='DESC'>
          <p>
            <strong>Prediction on Point is a sports prediction application developed during the HACK-Georgia Institute of Technology event in October 2023.</strong>
          <ul>
            <br></br>
          <li> It is operated using Support Vector Machine model, that predicts the winner of Premier League game with 79% precision. <br></br></li>
          <li> This machine learning algorithm operates on the last 10 years of official data which includes 20+ game factors and betting data from 6 different betting websites. <br></br></li>
          <br></br>
          <li><strong>Tech Stack:</strong> Python, Swift </li>
          </ul>
          <br></br>
          <a href='https://github.com/Nishchaypat/Premier-League-Prediction-Backend' target='_blank' rel='noopener noreferrer'> Github </a>
          </p>
          </div>
        )})} />
        <Project imgSrc={MQS} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: CS, description: (
          <div className='DESC'>
          <p>
            <strong> Movie Quote Search application is a web-based tool that enables users to conveniently search for and explore movie quotes based on specific search terms..</strong>
          <ul>
            <br></br>
          <li> A semantic search platform developed using OpenAI's text-embedding-ada-002 model for leveraging cosine similarity to provide precise outputs. <br></br></li>
          <li> The application helps eliminate the need to sift through countless alternatives and get the desired quote with 87% accuracy. <br></br></li>
          <br></br>
          <li><strong>Tech Stack:</strong> Python, OpenAI API, HTML, CSS, JavaScript </li>
          </ul>
          <br></br>
          <a href='https://github.com/Nishchaypat/Movie-Quote-Search-Backend' target='_blank' rel='noopener noreferrer'> Github </a>
          </p>
          </div>
        )})} />      
        
        </div>
      <a href='https://github.com/nishchaypat' target='_blank' rel='noopener noreferrer'>
        <button className='btn'> See More</button>
      </a>

      {selectedProject && <Modal selectedProject={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Projects;
