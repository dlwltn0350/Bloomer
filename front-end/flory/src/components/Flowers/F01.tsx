/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f01.glb -t
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";
import { useFrame, useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";

type GLTFResult = GLTF & {
  nodes: {
    f01_1: THREE.Mesh;
    f01_2: THREE.Mesh;
    f01_3: THREE.Mesh;
  };
  materials: {
    stem: THREE.MeshStandardMaterial;
    crokus: THREE.MeshStandardMaterial;
    bammoo: THREE.MeshStandardMaterial;
  };
};

export function F01(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;
  const location = useLocation();
  const modelRef = useRef<any>();
  const groupRef = useRef<any>();

  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();
  const clickMouse = new THREE.Vector2();
  const moveMouse = new THREE.Vector2();

  const rect = gl.domElement.getBoundingClientRect();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  const [isDragging, setIsDragging] = useState(false);

  useFrame(() => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }
  });

  const handleSetIsDragging = () => {
    setIsDragging(!isDragging);
  };

  const [position, setPosition] = useState({ x, y, z });

  const { nodes, materials } = useGLTF("/models/flowers/f01.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[position.x, position.y, position.z]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? groupRef : modelRef}
        userData={{ draggable: true, name: "f01" }}
        onClick={() => {
          handleSetIsDragging();
          console.log("클릭됨");
        }}
      >
        <mesh geometry={nodes.f01_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f01_2.geometry} material={materials.crokus} />
        <mesh geometry={nodes.f01_3.geometry} material={materials.bammoo} />
      </group>
    </group>
  );
}

export default F01;
