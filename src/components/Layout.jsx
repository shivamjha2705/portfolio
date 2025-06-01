import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
// import StarsCanvas from "./canvas/Stars";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />
      {/* <StarsCanvas /> */}
    </>
  );
};

export default Layout;
