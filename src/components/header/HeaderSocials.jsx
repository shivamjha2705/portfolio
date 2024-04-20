import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImBehance2} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/shivam-kumar-05/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/shivamjha2705' target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href='https://www.behance.net/shivamjha10' target='_blank' rel='noreferrer'><ImBehance2/></a>
    </div>
  )
}

export default HeaderSocials