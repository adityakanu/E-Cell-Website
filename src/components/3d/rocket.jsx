/* eslint-disable react/no-unknown-property */
import { ContactShadows, Html, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useLoader, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import the GLTFLoader
import modelUrl from "../../assets/cartoon_rocket/scene.gltf"; // Import the path to your GLTF model
// import { Effects } from "./Effects";

function Cube({ model }) {
    const meshRef = useRef();

    useFrame(() => {
        // meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.015;
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={model} />
        </mesh>
    );
}

function ModelLoader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

function ThreeScene() {
    const gltf = useLoader(GLTFLoader, modelUrl); // Load the GLTF model

    return (
        <div className="z-0 w-screen h-screen ">
            <Canvas
                gl={{ logarithmicDepthBuffer: true, antialias: false }}
                dpr={[1, 1.5]}
                camera={{ position: [10, 10, 10], fov: 25 }}
            >
                <Suspense fallback={<ModelLoader />}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} />
                    <hemisphereLight intensity={0.5} />
                    <Cube model={gltf.scene} />
                    <ContactShadows
                        resolution={1024}
                        frames={1}
                        position={[0, -1.16, 0]}
                        scale={15}
                        blur={0.5}
                        opacity={1}
                        far={20}
                    />
                    <mesh
                        scale={4}
                        position={[3, -1.161, -1.5]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
                    >
                        <ringGeometry args={[0.9, 1, 4, 1]} />
                        <meshStandardMaterial color="white" roughness={0.75} />
                    </mesh>
                    <mesh
                        scale={4}
                        position={[-3, -1.161, -1]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
                    >
                        <ringGeometry args={[0.9, 1, 3, 1]} />
                        <meshStandardMaterial color="white" roughness={0.75} />
                    </mesh>
                    {/* <Effects /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}

export default ThreeScene;
