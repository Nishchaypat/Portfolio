import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import './navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
      <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Portfolio
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/Patel_Nishchay.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100}>
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100}>
                  Experience
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100}>
                  Project
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/Transcript_2024.pdf" target="_blank" rel="noopener noreferrer">
                  Transcript
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/AWS1.pdf" target="_blank" rel="noopener noreferrer">
                  Amazon Web Services
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/Nishchay Patel_Codepath.pdf" target="_blank" rel="noopener noreferrer">
                  Codepath Web Development
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/CodepathTIP.pdf" target="_blank" rel="noopener noreferrer">
                  Codepath Technical Prep
                </a>
              </MenuItem>
              <MenuItem onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                handleMenuClose();
              }}>
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
              Home
            </Link>
            <a href="/Patel_Nishchay.pdf" target="_blank" rel="noopener noreferrer" className="desktopMenuListItem resumeLink">
              Resume
            </a>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
              About
            </Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
              Experience
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
              Project
            </Link>
            <div className="dropdown">
              <Button color="inherit" onClick={handleMenuOpen}>
                Certificates
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>
                  <a href="/Transcript_2024.pdf" target="_blank" rel="noopener noreferrer">
                    Transcript
                  </a>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <a href="/AWS1.pdf" target="_blank" rel="noopener noreferrer">
                    Amazon Web Services
                  </a>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <a href="/Nishchay Patel_Codepath.pdf" target="_blank" rel="noopener noreferrer">
                    Codepath Web Development
                  </a>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <a href="/CodepathTIP.pdf" target="_blank" rel="noopener noreferrer">
                    Codepath Technical Prep
                  </a>
                </MenuItem>
              </Menu>
            </div>
            <Button color="inherit" className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
