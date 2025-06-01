import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import JobBanner from "./JobBanner";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title, id) => {
    setActive(title);
    window.history.pushState(null, '', `/${id}`);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex flex-col gap-3 items-center py-5 fixed top-0 z-20 bg-primary`}>
    <JobBanner/>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            window.history.pushState(null, '', '/'); // Push / when clicking logo
          }}
        >
          <img
            src={logo}
            alt="Shivam Kumar"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shivam&nbsp;<span className="sm:block hidden">Kumar</span>
          </p>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(link.title, link.id)}
            >
              <HashLink smooth to={`/#${link.id}`}>
                {link.title}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <motion.div
            initial="hidden"
            animate={toggle ? "show" : "hidden"}
            variants={slideIn("left", "easeInOut", 0, 0.3)}
            className="flex items-center p-6 bg-primary absolute top-0 left-0 min-w-[70px] h-[100vh] rounded-xl"
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    handleNavClick(link.title, link.id);
                    setToggle(false); // Close menu after clicking
                  }}
                >
                  <HashLink smooth to={`/#${link.id}`}>
                    <i className={link.iconClass}></i> {link.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
