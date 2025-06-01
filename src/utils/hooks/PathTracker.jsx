import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Custom Hook to Track Previous Path
const usePreviousPath = () => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(null);

  useEffect(() => {
    setPreviousPath(location.pathname); // Store the current path as the previous path
  }, [location]);

  return previousPath;
};

export default usePreviousPath;
