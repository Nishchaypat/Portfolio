import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import bg from '../../assets/myimage.png';
import './intro.css';

const Intro = () => {
  return (
    <section id='intro' className='intro'>
      <Box className='introContent'>

        <motion.div
          initial={{ opacity: 0.01, y: '-100vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'backInOut' }}
        >
          <Typography variant="h1" className='introText circularRing'>
            NISHCHAY PATEL
            <br />
            <br />
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.9, ease: 'linear' }}
        >
          <Typography variant="body1" className='introPara' sx={{ fontSize: '1.8rem' }}>
            Bachelor of Science in Computer Science <br />
            Certification in Data Science <br /> <br />
            <strong>Georgia State University</strong>
          </Typography>
        </motion.div>

        {/* Optional: Animated button container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4, delay: 1, ease: 'easeInOut' }}
          className='introButtonContainer'
        >
          {/* Your button JSX here */}
        </motion.div>

      </Box>

      <motion.img
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5, delay: 1.5, ease: 'easeOut' }}
        src={bg}
        alt="Profile"
        className='bg'
      />
    </section>
  );
};

export default Intro;
