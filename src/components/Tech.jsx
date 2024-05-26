import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn} from '../utils/motion'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const BallCanvas =({tech_icon,title}) => {
  return(
    <Tilt className="xs:w-[100px] w-full">
    <motion.div
      variants={fadeIn("left", "spring", 0.5 * title, 0.75)}
      className='w-full green-pink-gradient p-[2px] xs:rounded-full rounded-[20px] shadow-card'
    >
    <div
       options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary xs:rounded-full rounded-[20px] py-5 min-h-100 flex justify-center items-center flex-col'
    >
    <img
          src={tech_icon}
          alt={title}
          className='xs:w-14 w-auto h-14 object-contain'
        />

    </div>
    </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 overflow-hidden'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name} title={technology.name}>
          <BallCanvas tech_icon={technology.icon} title={technologies.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");