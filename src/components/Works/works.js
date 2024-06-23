import React, { useState } from 'react';
import './works.css'; // Importing the CSS file for styling
import HH from '../../assets/portfolio-1.png';
import IIT from '../../assets/portfolio-2.png';
import EBCS from '../../assets/portfolio-3.png';

// Define work experience data with image URLs
const worksData = [
  {
    title: 'Software Engineering Intern',
    company: 'Hawkeye Hotels Corporate',
    startDate: 'May 2024',
    endDate: 'Present',
    description: `To to declared.`,
    image: HH,
  },
  {
    title: 'Software Support Specialist',
    company: 'Instructional Innovation & Technology, GSU',
    startDate: 'October 2022',
    endDate: 'Present',
    description: `Spearheaded the evolution of software and website functionality, maintaining an immersive experience for university staff and faculty of over 15 departments. Implemented Trellix encryption to fortify privacy on campus devices and utilized web ticket platforms for effective work order management, enhancing client satisfaction by 30%.`,
    image: IIT,
  },
  {
    title: 'Data Engineer',
    company: 'Evidence Based Cybersecurity Research Group, GSU',
    startDate: 'August 2023',
    endDate: 'Present',
    description: `Applied data cleaning algorithms and machine learning techniques to ensure accurate analysis of datasets, improving data accuracy by 25% for industry clients. Utilized linear regression predictive modeling to forecast outcomes and identify emerging trends, maintaining an 86% prediction accuracy. Developed Python scripts to provide tailored data analytics, elevating research quality by 30%.`,
    image: EBCS,
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='works'>
      <div className='works-container'>
        <h2 className='works-title'>Work Experience</h2>
        <p className='works-desc'>
          Explore my professional journey and expertise gained through various
          roles in corporate environments.
        </p>

        <div className='works-list'>
          {worksData.map((work, index) => (
            <div
              key={index}
              className={`work-item ${selectedProject === work ? 'active' : ''}`}
              onClick={() => handleProjectClick(work)}
            >
              <div className='work-content'>
                <div className='work-image'>
                  <img src={work.image} alt={work.title} />
                </div>
                <div className='work-details'>
                  <h3 className='work-title'>{work.title}</h3>
                  <p className='work-company'>
                    <strong>Company:</strong> {work.company}
                  </p>
                  <p className='work-duration'>
                    <strong>Duration:</strong> {work.startDate} - {work.endDate}
                  </p>
                  <p className='work-description'>{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className='modal-overlay' onClick={handleCloseModal}>
            <div className='modal'>
              <button className='close-button' onClick={handleCloseModal}>
                ×
              </button>
              <h3 className='modal-title'>{selectedProject.title}</h3>
              <p className='modal-company'>
                <strong>Company:</strong> {selectedProject.company}
              </p>
              <p className='modal-duration'>
                <strong>Duration:</strong> {selectedProject.startDate} - {selectedProject.endDate}
              </p>
              <p className='modal-description'>{selectedProject.description}</p>
            </div>
          </div>
        )}

        <a
          href='https://linkedin.com/in/nishchay-pat'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn'> View LinkedIn Profile</button>
        </a>
      </div>
    </section>
  );
};

export default Works;
