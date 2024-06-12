"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const ModelViewer: React.FC = () => {
  const myModel = useLoader(GLTFLoader, "");

  return (
    <Canvas style={{ height: "100px", width: "100%" }}>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
      <primitive object={myModel.scene} />
    </Canvas>
  );
};
