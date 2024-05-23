import React from 'react'
import './skills.css'
import SWE from '../../assets/SWE.png'
import ML from '../../assets/ML.png'
import DS from '../../assets/DS.png'
import CL from '../../assets/Cloud.png'

const Skills = props => {
  return (
    <section id="skills">
        <span className='skillTitle'> What I do </span> 
        <span className='skillDesc'>  I specialize in various domains including software engineering, machine learning, data science, and cloud engineering. My technical proficiency spans across multiple programming languages and frameworks, enabling me to deliver robust and scalable solutions.
 </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={SWE} alt="SWE" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Software Engineering
                    </h2>
                    <p>
                        My expertise in software engineering is underscored by a comprehensive proficiency across a spectrum of programming languages, encompassing Python, Java, JavaScript, HTML, CSS, SQL, C, NoSQL, and TypeScript. <br></br>My hands-on familiarity with diverse frameworks and libraries, including Django, React, Node.js, Flask, and Google API Services, equips me to engineer resilient and scalable web applications with precision and efficacy.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ML} alt="ML" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Machine Learning
                    </h2>
                    <p>
                    My proficiency in machine learning is exemplified by my contributions in leveraging TensorFlow and neural networks to significantly augment early cancer detection. Through in-depth analysis of tomography data, I've developed models that substantially elevate cancer detection accuracy. <br></br> Moreover, I've showcased expertise in applying predictive modeling techniques, such as linear regression, to precisely forecast outcomes and unveil emerging market trends.<br></br> My adeptness in extracting valuable insights from intricate datasets using machine learning algorithms underscores my prowess in this field.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={DS} alt="DS" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Data Science
                    </h2>
                    <p>
                        My data science skills are evident from my experience in employing data cleaning algorithms and machine learning techniques to ensure proper analysis of datasets, resulting in a 25% improvement in data accuracy for industry clients. <br></br>I have showcased my prowess in data visualization by transforming complex datasets into intuitive diagrams and graphs using Python, enabling better understanding of the information.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={CL} alt="CL" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Cloud Engineering
                    </h2>
                    <p>
                    Experienced in working with AWS, FireBase and Microsoft Azure, leveraging cloud platforms for building and deploying scalable applications. <br></br> Certified in AWS Specialization and Azure 900.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Skills
