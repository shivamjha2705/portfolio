import React from 'react'
import './about.css'
import profile from '../../assets/abt_me.JPG'
// import {FaAward} from 'react-icons/fa'
import { Link } from 'react-scroll'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
            <div className='about_me-image'>
              <img src={profile} alt='About Img'/>
            </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            {/* <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ years working</small>
            </article>
            <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ years working</small>
            </article>
            <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ years working</small>
            </article> */}
          </div>
          {/* <p>Hello, my name is Shivam , and I am passionate in building user-centered interfaces as a front-end developer and ui-ux designer with a strong foundation in HTML, CSS, JavaScript and Design principles .Currently i am pursuing <strong>MCA</strong> from <strong>BIT MESRA(Ranchi)</strong> and have completed several projects during my time in college that have honed my skills and prepared me for the industry.
                As a fresher, I am excited to bring my creativity and eagerness to learn to a new opportunity in the field. I am dedicated to staying up-to-date with the latest trends and technologies in front-end development and am eager to contribute my skills to projects that will make a difference.
                Thank you for visiting my portfolio, and I hope you enjoy exploring my work!
                </p> */}
                <p>As a final-year MCA student with a strong foundation in web development and data analytics, I am on a journey to become a versatile software engineer. Proficient in HTML, CSS, JavaScript, React.js, CMS tools like Sanity, and Firebase, I thrive on learning new technologies and applying them to tackle real-world challenges. Ready to contribute as a proactive software developer and engineer, I am committed to delivering innovative solutions that drive progress. My passion for problem-solving and dedication to staying at the forefront of technological advancements fuel my quest for excellence in the software engineering domain.</p>
                <Link to='contact' spy={true} smooth={true} offset={-20}  duration={500} className='btn btn-primary'>Let's Talk</Link>
        </div>
      </div>
    </section>
  )
}

export default About