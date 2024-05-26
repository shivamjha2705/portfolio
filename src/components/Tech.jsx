import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn} from '../utils/motion'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const BallCanvas =({icon,index,title}) => {
  return(
    <Tilt className="xs:w-[100px] w-full">
    <motion.div
      variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] xs:rounded-full shadow-card'
    >
    <div
       options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] xs:rounded-full py-5 min-h-100 flex justify-center items-center flex-col'
    >
    <img
          src={icon}
          alt={title}
          className='w-14 h-14 object-contain'
        />

    </div>
    </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        <div className='w-28 h-28' key={technology.name} title={technology.name}>
          <BallCanvas icon={technology.icon} index={index} title={technologies.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");