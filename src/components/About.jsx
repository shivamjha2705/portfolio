/* eslint-disable react/no-unknown-property */

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        Frontend-focused Software Developer with 1+ year of hands-on experience building scalable, performant, and visually appealing web applications. Skilled in React.js, Tailwind CSS, Redux Toolkit, Firebase, and modern UI libraries like Shadcn and Framer Motion. I’ve delivered 10+ responsive projects in a fast-paced startup environment, led small teams, and optimized systems for speed, accessibility, and user experience.
      <br/>
      I thrive on turning complex ideas into intuitive user interfaces and enjoy collaborating with cross-functional teams to bring digital products to life. Passionate about clean code, performance optimization, and continuously learning new technologies to stay ahead in the frontend ecosystem
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")