import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const [ref, inView] = useInView({
      threshold: 0.2, // when 20% of section is visible
      triggerOnce: true, // animate only first time
    });
    return (
      <motion.section
        ref={ref}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        animate={inView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;