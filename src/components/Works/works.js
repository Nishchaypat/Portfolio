import React, { useState } from 'react';
import './works.css'
import HH from '../../assets/portfolio-1.png'
import IIT from '../../assets/portfolio-2.png'
import EBCS from '../../assets/portfolio-3.png'



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

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="works">
      <h2 className='projectsTitle'>Work Experience</h2>
      <span className='projectsDesc'>The following experiences potrays my skills and capabilities to work in an corporate environment and as a team.</span>
      <div className='projectsImgs'>
        <Project imgSrc={HH} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: HH, description: (
          <div className='DESC'>
          <p>
            <strong> Software Engineering Intern | AI Engineer |</strong> <br></br>
            <strong> Hawkeye Hotels Corporate </strong>
          <ul>
            <br></br>
          <li>In Progress. <br></br></li>
          
          </ul>
          </p>
          </div>
        )})} />
        <Project imgSrc={IIT} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: IIT, description: (
          <div className='DESC'>
          <p>
          <strong> Software Support Specialist</strong> <br></br>
          <strong> Instructional Innovation & Technology, GSU </strong>
          <ul>
            <br></br>
          <li> Spearhead the evolution of software and website functionality, by maintaining an immersive experience for university staff and faculty of over 15 different departments. <br></br></li>
          <li> Enforce data security measures by implementing Trellix encryption to fortify privacy on campus devices. <br></br></li>
          <li> Utilize web ticket platform to exhibit effective work order management and feedback, improving client satisfaction by 30%.</li>
          </ul>
          <br></br>
          <a href='https://technology.gsu.edu/' target='_blank' rel='noopener noreferrer'> Company Info </a>
          </p>
          </div>
        )})} />
        <Project imgSrc={EBCS} description="Description for Project 1" onClick={() => handleProjectClick({ imgSrc: EBCS, description: (
          <div className='DESC'>
          <p>
          <strong> Data Analyst </strong> <br></br>
          <strong> Evidence Based Cybersecurity Research Group, GSU </strong>
          <ul>
            <br></br>
          <li> Employee data cleaning algorithms and machine learning techniques to ensure proper analysis of datasets, resulting in a 25% improvement in data accuracy for the industry clients. <br></br></li>
          <li> Leverage linear regression predictive modeling to accurately forecast outcomes and identify emerging trends within target markets, maintaining prediction accuracy of 86%. <br></br></li>
          <li> Assembled Python to obtain tailored data analytics required by the professor, resulting in a 30% increase in the caliber of their research.</li>
          </ul>
          <br></br>
          <a href='https://ebcs.gsu.edu/' target='_blank' rel='noopener noreferrer'> Company Info </a>
          </p>
          </div>
        )})} />      
        
        </div>
      <a href='https://linkedin.com/in/nishchay-pat' target='_blank' rel='noopener noreferrer'>
        <button className='btn'> See More</button>
      </a>

      {selectedProject && <Modal selectedProject={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Works;

