import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// -----all components----
import { useEffect } from "react";
import Layout from "./components/Layout";
import ProjectDetails from "./components/pages/ProjectDetails";


const ScrollOnLoad = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path) {
      const el = document.getElementById(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};


const App = () => {
  // const previousPath = usePreviousPath();
  
  return (
    <BrowserRouter>
    <ScrollOnLoad/>
  <div className="relative z-0 bg-primary">
    <div className="bg-cover bg-no-repeat bg-center">
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/project" element={<Works />} /> */}
         {/* New Project Details page */}
         <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  </div>
</BrowserRouter>

  );
};

export default App;
