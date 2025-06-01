import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section ref={ref} className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* -------side line--------- */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* -------hero text--------- */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className='text-[#915eff]'>Shivam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer <br className='sm:block hidden' />
            Specializing in UI and Data Insights
          </p>
        </div>
      </div>

      {/* ✅ Lazy-load Canvas only when in view */}
      {inView && <ComputersCanvas />}

      {/* Scroll-down animation */}
      <div className="absolute xs:bottom-3 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
