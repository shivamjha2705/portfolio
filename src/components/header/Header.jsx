import React from 'react'
import './header.css'
import { Link } from "react-scroll"
import CTA from './CTA'
import me from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shivam Kumar</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt='Shivam Kumar'/>
        </div>

        <Link to='contact' spy={true} smooth={true} offset={-20}  duration={500} className='scroll_down'>Scroll Down</Link>
      </div>
    </header>
  )
}

export default Header