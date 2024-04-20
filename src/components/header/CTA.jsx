import React from 'react'
import { Link } from "react-scroll"
import resume from '../../assets/ShivamKumar.pdf'
/*import pdf*/
const CTA = () => {
  return (
    <div className='cta'>
        <a download='Shivam Kumar' href={resume} className='btn' >Download CV</a>
        <Link to='contact' spy={true} smooth={true} offset={-20}  duration={500} className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA