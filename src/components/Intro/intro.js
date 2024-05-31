import React from 'react'
import './intro.css'
import bg from '../../assets/myimage.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='introText'>NISHCHAY PATEL</span>
        <span className='Title'>Full Stack Software Engineer <br></br></span>
        <br/>
        <p className='introPara'> Bachelors of Science in Computer Science <br></br> Certification in Data Science. <br></br> <strong>Georgia State University</strong></p>
      </div>
      <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro;
