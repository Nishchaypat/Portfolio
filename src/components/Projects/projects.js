import React from 'react'
import './projects.css'
import CS from '../../assets/portfolio-4.png'
import PP from '../../assets/portfolio-5.png'
import MQS from '../../assets/portfolio-6.png'

const Projects = () => {
  return (
    <section id="projects">
        <h2 className='projectsTitle'>My Projects</h2>
        <span className='projectsDesc'>The following projects highlight my primary skills and demonstrate my capabilities across various domains.</span>
        <div className='projectsImgs'>
          <img src={CS} alt='' className='projectsImg'/>
          <img src={PP} alt='' className='projectsImg'/>
          <img src={MQS} alt='' className='projectsImg'/>
        </div>
        <a href='https://github.com/nishchaypat' target='_blank' rel='noopener noreferrer'>
        <button className='btn'> See More</button>
        </a>
    </section>
  );
}

export default Projects