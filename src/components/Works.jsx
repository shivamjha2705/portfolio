import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PropTypes from 'prop-types';

const MAX_DESCRIPTION_LENGTH = 100;

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + " . . .";
  }
  return description;
};

const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  livePreview,
}) => {
  const navigate = useNavigate();
  const truncatedDescription = truncateDescription(description, MAX_DESCRIPTION_LENGTH);

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer"
      onClick={handleCardClick}
    >
      <Tilt
        options={{ max: 10, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px] flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col items-end gap-4 m-3 card-img_hover">
            {livePreview && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(livePreview, "_blank");
                }}
                className="bg-[#915EFF] border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Live Preview"
              >
                <img
                  src={live}
                  alt="live preview"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Source Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{truncatedDescription}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
// Adding prop validation for ProjectCard component
ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string,
  livePreview: PropTypes.string,
};

const Works = () => {

  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll into view only when route is /project (not /project/:id)
    if (location.pathname === "/project") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const [selectedTab, setSelectedTab] = useState('ALL');

  const filterProjects = (projects, tab) => {
    if (tab === 'ALL') return projects;
    return projects.filter((project) => project.type === tab);
  };

  const filteredProjects = filterProjects(projects, selectedTab);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-start space-x-4 overflow-x-auto scrollbar-hidden">
        {['ALL', 'Web', 'UI-UX', 'Data Analysis'].map((tab) => (
          <button
            key={tab}
            className={`relative rounded-full px-3 py-1.5 sm:text-sm text-xs font-medium transition ${
              selectedTab === tab ? 'text-white' : 'hover:text-white/60 text-white'
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {selectedTab === tab && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
