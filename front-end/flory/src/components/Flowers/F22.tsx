/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f22.glb -t
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
    f22_1: THREE.Mesh;
    f22_2: THREE.Mesh;
    f22_3: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshStandardMaterial;
    stem: THREE.MeshStandardMaterial;
  };
};

export function F22(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;
  const location = useLocation();
  const modelRef = useRef<any>();
  useFrame(() => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }
  });

  const { nodes, materials } = useGLTF("/models/flowers/f22.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[x, y, z]}
        rotation={[-3.07, -0.6, -2.78]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? undefined : modelRef}
      >
        <mesh
          geometry={nodes.f22_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.f22_2.geometry}
          material={materials["Material.021"]}
        />
        <mesh geometry={nodes.f22_3.geometry} material={materials.stem} />
      </group>
    </group>
  );
}

export default F22;
