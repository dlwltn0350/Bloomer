/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/beach_map.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";

export function CameraAndLight(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <OrthographicCamera
        makeDefault={true}
        far={1000}
        near={0.1}
        position={[-32.01, 31.35, -29.14]}
        rotation={[-2.33, -0.65, -2.58]}
        zoom={50}
      />
      <pointLight
        intensity={3}
        decay={2}
        color="#ff6728"
        position={[-3.77, 2.82, -1.77]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <pointLight
        intensity={3}
        decay={2}
        color="#ff6728"
        position={[3.14, 2.92, -3.19]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <directionalLight
        // ref={directionalLightRef1}
        position={[0, 10, -1]}
        intensity={0.1}
        color="#53288f"
        castShadow
      />
      <directionalLight
        // ref={directionalLightRef2}
        position={[-7, 3, 10]}
        intensity={0.2}
        color="#6a00ff"
      />
    </group>
  );
}

export default CameraAndLight;