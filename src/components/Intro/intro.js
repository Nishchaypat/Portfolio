import React from 'react'
import './intro.css'
import bg from '../../assets/myimage.jpg'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='introText'>NISHCHAY PATEL</span>
        <span className='Title'>Full Stack Software Engineer</span>
        <br/>
        <p className='introPara'> I have extensive experience in Software Development, Machine Learning, and Data Science, gained through internships, on-campus research, and various projects.</p>
      </div>
      <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro;
