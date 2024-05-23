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
        <span className='skillDesc'>             I specialize in various domains including software engineering, machine learning, data science, and cloud engineering. My technical proficiency spans across multiple programming languages and frameworks, enabling me to deliver robust and scalable solutions.
 </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={SWE} alt="SWE" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Software Engineering
                    </h2>
                    <p>
                        XYZ
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
                        XYZ
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
                        XYZ
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
                    Experienced in working with AWS and Microsoft Azure, leveraging cloud platforms for building and deploying scalable applications. Certified in AWS Specialization and experienced with Firebase and Google API Services.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Skills
