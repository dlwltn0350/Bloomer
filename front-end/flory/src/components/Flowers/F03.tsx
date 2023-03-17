/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f03.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    f03_1: THREE.Mesh;
    f03_2: THREE.Mesh;
  };
  materials: {
    ["Material.023"]: THREE.MeshStandardMaterial;
    stem: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/flowers/f03.glb") as GLTFResult;
  const modelRef1 = useRef<any>();
  const modelRef2 = useRef<any>();

  useFrame(() => {
    modelRef1.current!.rotation.y += 0.01;
    modelRef2.current!.rotation.y += 0.01;
  });

  return (
    <group {...props} dispose={null}>
      <group
        // position={[2.84, 0.26 - num, -74.25]}
        position={[0, -0.7, 0]}
        rotation={[0.04, 0.46, -0.11]}
        scale={0.17}
      >
        <OrthographicCamera
          makeDefault={true}
          far={2000}
          near={0.1}
          // bottom={0}
          position={[30.37, 3.24, 30.16]}
          rotation={[-0.79, 0.62, 0.52]}
          zoom={30}
        />
        <ambientLight intensity={0.5} />
        <pointLight
          intensity={2}
          decay={2}
          color="red"
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <pointLight
          intensity={3}
          decay={2}
          color="green"
          position={[5, -10, 3]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <pointLight
          intensity={2}
          decay={2}
          color="red"
          position={[3.77, 9.82, 5.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <pointLight
          intensity={2}
          decay={2}
          color="red"
          position={[-3.77, 9.82, -1.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <pointLight
          intensity={3}
          decay={2}
          color="red"
          position={[3.14, 9.92, -3.19]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />

        <mesh
          ref={modelRef1}
          geometry={nodes.f03_1.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          ref={modelRef2}
          geometry={nodes.f03_2.geometry}
          material={materials.stem}
        />
        <axesHelper args={[5]} />
      </group>
    </group>
  );
}

// useGLTF.preload('/f03.glb')
function F03() {
  return (
    // object3D: 빈 지역 공간
    <Model />
  );
}

export default F03;
