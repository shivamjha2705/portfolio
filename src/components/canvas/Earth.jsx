import {React,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
    <hemisphereLight intensity={3.5} groundColor='darkgreen'/>
    <pointLight intensity={3} />
    <spotLight
      position={[0, 5, 50]}
      angle={0.12}
      penumbra={1}
      intensity={3}
    />
    <primitive 
    object={earth.scene}
    scale={ 0.08} 
    position-y={-2.5} rotation-y={0}
   

    />
  </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    frameloop='demand'
    shadows
    
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{preserveDrawingBuffer:true}}
    >
    <Suspense className="cursor-grab" fallback={<CanvasLoader/>}>
      <OrbitControls 
      autoRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth/>
    </Suspense>
    <Preload all/>
    </Canvas>
  );
};

export default EarthCanvas