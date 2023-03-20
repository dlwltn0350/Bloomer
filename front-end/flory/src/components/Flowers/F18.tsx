/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f18.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";
import { useLocation } from "react-router-dom";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    f18_1: THREE.Mesh;
    f18_2: THREE.Mesh;
    f18_3: THREE.Mesh;
  };
  materials: {
    stem: THREE.MeshStandardMaterial;
    anemone: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

export function F18(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;
  const location = useLocation();
  const modelRef = useRef<any>();
  useFrame(() => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }
  });

  const { nodes, materials } = useGLTF("/models/flowers/f18.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[x, y, z]}
        rotation={[1.95, -1.22, -2.12]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? undefined : modelRef}
      >
        <mesh geometry={nodes.f18_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f18_2.geometry} material={materials.anemone} />
        <mesh geometry={nodes.f18_3.geometry} material={materials.Material} />
      </group>
    </group>
  );
}

export default F18;
