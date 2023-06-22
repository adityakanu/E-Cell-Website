import { ContactShadows, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Effects } from "./Effects";
const name = (type) => `Rock035_1K_${type}.png`;
function Cube() {
  const meshRef = useRef();

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      name("Color"),
      name("Displacement"),
      name("Normal"),
      name("Roughness"),
      name("AmbientOcclusion"),
    ]);

  useFrame(() => {
    // meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.015;
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      {/* <directionalLight /> */}
      <pointLight position={[10, 10, 10]} />
      <hemisphereLight intensity={0.5} />
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          displacementScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

function ThreeScene() {
  return (
    <div className="h-screen w-screen z-0 absolute ">
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [10, 10, 10], fov: 25 }}
      >
        <Suspense fallback={null}>
          <Cube />
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
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeScene;
