import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Model from "./Model";
import CanvasLoader from "../Loader";

const AvatarCanvas = () => {
    return (
        <Canvas camera={{ position: [1, 0, 9], fov: 15 }}>
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={<CanvasLoader />}>
                <Model position={[0.025, -0.8, 0]} />
            </Suspense>
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            {/* <Preload all /> */}
        </Canvas>
    );
};
export default AvatarCanvas;
