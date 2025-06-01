// src/components/SceneCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import Computers from "./canvas/Computers";
import Earth from "./canvas/Earth";
import Stars from "./canvas/Stars";
import CanvasLoader from "./Loader"; // your loading spinner

const SceneCanvas = () => {
  const location = useLocation();

  const getCurrentScene = () => {
    if (location.pathname === "/contact") return "earth";
    if (location.pathname === "/") return "computer";
    return "stars"; // for about, experience, works etc
  };

  const currentScene = getCurrentScene();

  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {currentScene === "computer" && <Computers />}
        {currentScene === "earth" && <Earth />}
        {currentScene === "stars" && <Stars />}
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SceneCanvas;
