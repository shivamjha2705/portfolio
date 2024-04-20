import React from 'react'
import './nav.css'
import { Link } from "react-scroll"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiPencilRuler2Line} from 'react-icons/ri'
import {VscServerProcess} from 'react-icons/vsc'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav , setActiveNav]=useState('')
  return (
    <nav>
      <Link to="header"   spy={true} smooth={true} offset={-20}  duration={500} onClick={()=> setActiveNav('header')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></Link>
      <Link to="about"  spy={true} smooth={true} offset={-20}  duration={500} onClick={()=>setActiveNav('about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></Link>
      <Link to="skills"  spy={true} smooth={true} offset={-20}  duration={500} onClick={()=>setActiveNav('skills')} className={activeNav === '#skills' ? 'active' : ''}><RiPencilRuler2Line/></Link>
      <Link to="projects"  spy={true} smooth={true} offset={-20}  duration={500} onClick={()=>setActiveNav('projects')} className={activeNav === '#projects' ? 'active' : ''} ><VscServerProcess/></Link>
      <Link to="contact"  spy={true} smooth={true} offset={-20}  duration={500} onClick={()=>setActiveNav('contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail/></Link>
        
    </nav>
  )
}

export default Nav