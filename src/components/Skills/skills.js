import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SWE from '../../assets/SWE.png';
import ML from '../../assets/ML.png';
import DS from '../../assets/DS.png';
import CL from '../../assets/Cloud.png';
import './skills.css';

const Skills = () => {
  const { ref: refSWE, inView: inViewSWE } = useInView({ threshold: 0.3 });
  const { ref: refML, inView: inViewML } = useInView({ threshold: 0.3 });
  const { ref: refDS, inView: inViewDS } = useInView({ threshold: 0.3 });
  const { ref: refCL, inView: inViewCL } = useInView({ threshold: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills">
      <div className="skillsContent">
        <motion.h1
          initial="hidden"
          animate={inViewSWE ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
          className="skillTitle"
        >
          What I Do
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inViewSWE ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
          className="skillDesc"
        >
          I specialize in various domains including software engineering, machine learning, data science, and cloud engineering. My technical proficiency spans across multiple programming languages and frameworks, enabling me to deliver robust and scalable solutions.
        </motion.p>
        <div className="skillBars">
          <SkillBar
            refProp={refSWE}
            inView={inViewSWE}
            title="Software Engineering"
            image={SWE}
            description="My expertise in software engineering is underscored by a comprehensive proficiency across a spectrum of programming languages, encompassing Python, Java, JavaScript, HTML, CSS, SQL, C, NoSQL, and TypeScript. My hands-on familiarity with diverse frameworks and libraries, including Django, React, Node.js, Flask, and Google API Services, equips me to engineer resilient and scalable web applications with precision and efficacy."
          />
          <SkillBar
            refProp={refML}
            inView={inViewML}
            title="Machine Learning"
            image={ML}
            description="My proficiency in machine learning is exemplified by my contributions in leveraging TensorFlow and neural networks to significantly augment early cancer detection. Through in-depth analysis of tomography data, I've developed models that substantially elevate cancer detection accuracy. Moreover, I've showcased expertise in applying predictive modeling techniques, such as linear regression, to precisely forecast outcomes and unveil emerging market trends. My adeptness in extracting valuable insights from intricate datasets using machine learning algorithms underscores my prowess in this field."
          />
          <SkillBar
            refProp={refDS}
            inView={inViewDS}
            title="Data Science"
            image={DS}
            description="My data science skills are evident from my experience in employing data cleaning algorithms and machine learning techniques to ensure proper analysis of datasets, resulting in a 25% improvement in data accuracy for industry clients. I have showcased my prowess in data visualization by transforming complex datasets into intuitive diagrams and graphs using Python, enabling better understanding of the information."
          />
          <SkillBar
            refProp={refCL}
            inView={inViewCL}
            title="Cloud Engineering"
            image={CL}
            description="Experienced in working with AWS, Firebase, and Microsoft Azure, leveraging cloud platforms for building and deploying scalable applications. Certified in AWS Specialization and Azure 900."
          />
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ refProp, inView, title, image, description }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1 }}
      className="skillBar"
    >
      <img src={image} alt={title} className="skillBarImg" />
      <div className="skillBarText">
        <h2>{title}</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Skills;
