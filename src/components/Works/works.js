import React from 'react'
import './works.css'
import HH from '../../assets/portfolio-1.png'
import IIT from '../../assets/portfolio-2.png'
import EBCS from '../../assets/portfolio-3.png'


const Works = () => {
  return (
    <section id="works">
        <h2 className='worksTitle'>My Work Experience</h2>
        <span className='worksDesc'>Below are few of my work experiences. Click the image to know more about it.</span>
        <div className='worksImgs'>
            <img src={HH} alt='' className='worksImg'/>
            <img src={IIT} alt='' className='worksImg'/>
            <img src={EBCS} alt='' className='worksImg'/>
        </div>
        <a href='https://linkedin.com/in/nishchay-pat' target='_blank' rel='noopener noreferrer'>
        <button className='btn'> See More</button>
        </a>
    </section>
  )
}

export default Works
