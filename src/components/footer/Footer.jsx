import React from 'react'
import { Link } from 'react-scroll'
import "./footer.css"
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { ImBehance2 } from 'react-icons/im'
const Footer = () => {
  return (
    <footer>
        <Link to='header' spy={true} smooth={true} offset={-20}  duration={500} className='footer_logo'>Shivam Kumar</Link>
        <ul className='permalinks'>
            <li><Link to='header' spy={true} smooth={true} offset={-20}  duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-20}  duration={500}>About</Link></li>
            <li><Link to="skills" spy={true} smooth={true} offset={-20}  duration={500} >Skills</Link></li>
            <li><Link to="projects" spy={true} smooth={true} offset={-20}  duration={500} >Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-20}  duration={500} >Contact Me</Link></li>         
        </ul>
        <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/shivam-kumar-05/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/shivamjha2705' target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href='https://www.behance.net/shivamjha10' target='_blank' rel='noreferrer'><ImBehance2/></a>
        </div>
        <div className='footer_copyright'>
                    <small>Copyright &copy; 2023 Shivam</small>
                    </div>
    </footer>
  )
}

export default Footer