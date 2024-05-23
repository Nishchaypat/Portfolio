import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'> Home </Link>
          <a href='/Patel_Nishchay.pdf' target='_blank' rel='noopener noreferrer' className='desktopMenuListItem resumeLink'> Resume </a>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'> About </Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'> Experience </Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='desktopMenuListItem'> Project </Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <img src={contactImg} alt="" className='desktopMenuImg'/> Contact Me
        </button>
      </nav>
  )
}

export default Navbar