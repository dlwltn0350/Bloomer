/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/camp_map.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CameraAndLight from "./CameraAndLight";
import BaseGrassAndFlowers from "./BaseGrassAndFlowers";
import { MeshStandardMaterial } from "three";
import GuestBookModel from "../../GuestBook/GuestBookModel/GuestBook";

type GLTFResult = GLTF & {
  nodes: {
    Plane004: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Vert: THREE.Mesh;
    Roundcube: THREE.Mesh;
    Roundcube001: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Roundcube003: THREE.Mesh;
    Roundcube004: THREE.Mesh;
    Roundcube005: THREE.Mesh;
    Roundcube006: THREE.Mesh;
    Roundcube007: THREE.Mesh;
    Roundcube008: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane002: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle004: THREE.Mesh;
    Circle005: THREE.Mesh;
    Circle006: THREE.Mesh;
    Circle007: THREE.Mesh;
    Circle008: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane027: THREE.Mesh;
    Plane028: THREE.Mesh;
    Vert004: THREE.Mesh;
    Mesh_34: THREE.Mesh;
    Mesh_35: THREE.Mesh;
    Vert002: THREE.Mesh;
    Mesh_36: THREE.Mesh;
    Mesh_37: THREE.Mesh;
    Vert003: THREE.Mesh;
    Mesh_38: THREE.Mesh;
    Mesh_39: THREE.Mesh;
    Vert005: THREE.Mesh;
    Mesh_40: THREE.Mesh;
    Mesh_41: THREE.Mesh;
    Plane035: THREE.Mesh;
    Plane036: THREE.Mesh;
    Plane038: THREE.Mesh;
    Plane039: THREE.Mesh;
    Plane040: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube030: THREE.Mesh;
  };
  materials: {
    Cloth: THREE.MeshStandardMaterial;
    River: THREE.MeshStandardMaterial;
    Water: THREE.MeshPhysicalMaterial;
    Wood: THREE.MeshStandardMaterial;
    Leaves: THREE.MeshStandardMaterial;
    ["Cloth.001"]: THREE.MeshStandardMaterial;
    Brown: THREE.MeshStandardMaterial;
    Rope: THREE.MeshStandardMaterial;
    Plant: THREE.MeshStandardMaterial;
    ["Grass.001"]: THREE.MeshStandardMaterial;
    ["Brown.001"]: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    Rock: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/camp_map.glb`
  ) as GLTFResult;
  console.log(nodes.Plane012);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials.Cloth}
        position={[-1.94, 0.25, -0.49]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        // material={nodes.Plane012.material}
        position={[0, -0.92, 0]}
        scale={[154.36, 1, 154.36]}
        castShadow={true}
        receiveShadow={true}
      >
        <meshStandardMaterial color={"#fff200"} />
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.River}
        position={[0, -0.02, 0]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh geometry={nodes.Plane001.geometry} material={materials.Water} />
      <mesh
        geometry={nodes.Vert.geometry}
        material={materials.Wood}
        position={[-1.84, 0.04, -3.02]}
        rotation={[0, -0.31, 0]}
        scale={0.72}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Roundcube.geometry}
          material={materials.Leaves}
          position={[0.94, 3.66, -1.75]}
          rotation={[0, 1.23, 0]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube001.geometry}
          material={materials.Leaves}
          position={[-0.05, 4.19, -1.49]}
          rotation={[0, 1.4, 0]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube002.geometry}
          material={materials.Leaves}
          position={[1.02, 3.28, -0.34]}
          rotation={[0, -1.24, 0]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube003.geometry}
          material={materials.Leaves}
          position={[-1.28, 4.63, 0.3]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube004.geometry}
          material={materials.Leaves}
          position={[-1.62, 3.75, -0.7]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube005.geometry}
          material={materials.Leaves}
          position={[-2.24, 3.25, 0.73]}
          rotation={[0, 1.24, 0]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube006.geometry}
          material={materials.Leaves}
          position={[-2.21, 2.3, 1.31]}
          rotation={[Math.PI, -0.6, Math.PI]}
          scale={0.52}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube007.geometry}
          material={materials.Leaves}
          position={[0.01, 4.07, 0.48]}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Roundcube008.geometry}
          material={materials.Leaves}
          position={[-0.83, 2.8, 1.1]}
          rotation={[0.46, 0.45, -0.78]}
          scale={0.76}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.Cloth}
        position={[-1.94, -0.02, -0.49]}
        scale={0.7}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["Cloth.001"]}
        position={[-1.94, -0.02, -0.49]}
        scale={0.7}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials.Brown}
        position={[0.06, -0.07, 1.35]}
        rotation={[0.16, -0.25, -0.2]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials.Brown}
        position={[-3.78, 0.11, 1.4]}
        rotation={[0.19, -0.58, 0.33]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials.Brown}
        position={[0.14, 0.14, -2.54]}
        rotation={[0, 0.21, -0.33]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials.Brown}
        position={[-3.86, 0.09, -2.34]}
        rotation={[-0.22, 0.07, 0.29]}
        scale={0.65}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        material={materials.Rope}
        position={[0.06, -0.08, 1.45]}
        rotation={[-0.14, -0.25, -0.2]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle006.geometry}
        material={materials.Rope}
        position={[-3.78, 0.11, 1.4]}
        rotation={[0.19, -0.58, 0.33]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        material={materials.Rope}
        position={[0.18, 0.19, -2.55]}
        rotation={[0.26, 0.25, -0.19]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle008.geometry}
        material={materials.Rope}
        position={[-3.9, 0.15, -2.35]}
        rotation={[-0.17, 0.15, -0.09]}
        scale={0.65}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane031.geometry}
        material={nodes.Plane031.material}
        position={[0, -5.44, 0]}
        scale={0.77}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials.Plant}
        position={[3.61, -0.26, 2.69]}
        rotation={[-0.03, -0.95, -0.06]}
        scale={0.93}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Plane006.geometry}
          material={materials.Plant}
          rotation={[-Math.PI, 1.03, -Math.PI]}
          scale={1.06}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials.Plant}
          rotation={[-2.7, -0.42, -2.95]}
          scale={0.92}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials.Plant}
        position={[-1.12, -0.15, 2.22]}
        rotation={[-0.26, -0.34, -0.35]}
        scale={1.13}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Plane009.geometry}
          material={materials.Plant}
          rotation={[3.05, 1.23, -2.81]}
          scale={1.06}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane010.geometry}
          material={materials.Plant}
          rotation={[-2.7, -0.42, -2.95]}
          scale={0.92}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane011.geometry}
          material={materials.Plant}
          rotation={[-0.61, -0.97, -0.96]}
          scale={0.92}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane021.geometry}
        material={materials["Grass.001"]}
        position={[-2.23, 0.1, 1.78]}
        rotation={[0.25, -0.34, -0.16]}
        scale={1.59}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane022.geometry}
        material={materials["Grass.001"]}
        position={[-1.16, 0.09, -3.07]}
        rotation={[-0.1, -0.12, -0.08]}
        scale={2.09}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane023.geometry}
        material={materials["Grass.001"]}
        position={[-1.54, 0.06, -2.6]}
        rotation={[0.09, -0.02, 0.14]}
        scale={1.5}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane024.geometry}
        material={materials["Grass.001"]}
        position={[0.79, -0.11, -3.89]}
        rotation={[-0.18, -0.18, -0.08]}
        scale={1.2}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane025.geometry}
        material={materials["Grass.001"]}
        position={[2.79, 0.07, -2.66]}
        rotation={[-0.08, 0.41, 0.05]}
        scale={1.42}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane026.geometry}
        material={materials["Grass.001"]}
        position={[-3.44, 0.13, -3.23]}
        rotation={[-0.08, -0.88, -0.03]}
        scale={2.04}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane027.geometry}
        material={materials["Grass.001"]}
        position={[-2.7, 0.1, -3]}
        rotation={[-0.04, -0.88, -0.1]}
        scale={1.48}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane028.geometry}
        material={materials["Grass.001"]}
        position={[-2.37, 0.14, -3.5]}
        rotation={[-3.01, -0.61, -3.1]}
        scale={2.04}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Vert004.geometry}
        material={materials["Grass.001"]}
        position={[-3.45, 0.02, 2.2]}
        rotation={[0.12, 0.16, 0.11]}
        scale={1.13}
        castShadow={true}
        receiveShadow={true}
      >
        <group position={[-0.13, 1.06, 0]} rotation={[0, 0, 0.23]} scale={0.13}>
          <mesh geometry={nodes.Mesh_34.geometry} material={materials.Brown} />
          <mesh
            geometry={nodes.Mesh_35.geometry}
            material={materials["Brown.001"]}
            castShadow={true}
            receiveShadow={true}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Vert002.geometry}
        material={materials["Grass.001"]}
        position={[-3.39, 0.04, 2.09]}
        rotation={[0.04, -0.41, 0.17]}
        scale={1.1}
        castShadow={true}
        receiveShadow={true}
      >
        <group position={[-0.13, 1.06, 0]} rotation={[0, 0, 0.23]} scale={0.13}>
          <mesh geometry={nodes.Mesh_36.geometry} material={materials.Brown} />
          <mesh
            geometry={nodes.Mesh_37.geometry}
            material={materials["Brown.001"]}
            castShadow={true}
            receiveShadow={true}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Vert003.geometry}
        material={materials["Grass.001"]}
        position={[-3.35, 0.01, 2.28]}
        rotation={[-0.42, 1.48, 0.71]}
        castShadow={true}
        receiveShadow={true}
      >
        <group position={[-0.13, 1.06, 0]} rotation={[0, 0, 0.23]} scale={0.13}>
          <mesh geometry={nodes.Mesh_38.geometry} material={materials.Brown} />
          <mesh
            geometry={nodes.Mesh_39.geometry}
            material={materials["Brown.001"]}
            castShadow={true}
            receiveShadow={true}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Vert005.geometry}
        material={materials["Grass.001"]}
        position={[-3.31, 0.04, 2.18]}
        rotation={[-0.39, -1.43, -0.3]}
        castShadow={true}
        receiveShadow={true}
      >
        <group position={[-0.13, 1.06, 0]} rotation={[0, 0, 0.23]} scale={0.13}>
          <mesh geometry={nodes.Mesh_40.geometry} material={materials.Brown} />
          <mesh
            geometry={nodes.Mesh_41.geometry}
            material={materials["Brown.001"]}
            castShadow={true}
            receiveShadow={true}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Plane035.geometry}
        material={materials["Grass.001"]}
        position={[-3.73, -0.03, 2]}
        rotation={[0.88, -0.61, 0.73]}
        scale={[1.31, 4.73, 1.31]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane036.geometry}
        material={materials["Grass.001"]}
        position={[-3.68, 0.02, 1.77]}
        rotation={[-0.91, 0.94, 0.7]}
        scale={[0.94, 3.38, 0.94]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane038.geometry}
        material={materials.Ground}
        position={[0, -0.1, 0]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane040.geometry}
        material={materials["Grass.001"]}
        position={[-1.2, 0.1, -3.61]}
        rotation={[-0.22, 1.08, 0.13]}
        scale={1.58}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.Rock}
        position={[-3.64, -0.17, 2.85]}
        rotation={[0.07, 0.54, 0]}
        scale={2.08}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.Rock}
        position={[-2.61, -0.09, 2.45]}
        rotation={[0.6, 0.52, -0.06]}
        scale={1.94}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials.Rock}
        position={[-1.74, -0.33, 2.81]}
        rotation={[-0.17, 0.6, -0.11]}
        scale={1.29}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.Rock}
        position={[-1.71, -0.05, 2.13]}
        rotation={[0.27, 0.21, -0.19]}
        scale={1.57}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials.Rock}
        position={[-1.23, -0.29, 2.57]}
        rotation={[0.16, 0.47, 0.04]}
        scale={1.02}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials.Rock}
        position={[2.8, -0.25, 2.55]}
        rotation={[0.39, 0.57, 0.22]}
        scale={1.48}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials.Rock}
        position={[2.21, -0.27, 2.43]}
        rotation={[-0.18, 0.54, -0.09]}
        scale={0.98}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials.Rock}
        position={[3.78, -0.26, 2.64]}
        rotation={[-0.47, 1.36, 0.58]}
        scale={0.56}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials.Rock}
        position={[3.38, -0.15, -3.31]}
        rotation={[1.21, 0.13, -1.41]}
        scale={1.94}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials.Rock}
        position={[2.64, 0, -3.24]}
        rotation={[-0.33, 0.5, 0.13]}
        scale={1.4}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials.Rock}
        position={[3.14, 0.01, -2.7]}
        rotation={[3.11, -0.23, 0.79]}
        scale={0.81}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Rock}
        position={[1.57, -0.25, 1.61]}
        rotation={[0.36, 0.49, -0.03]}
        scale={0.5}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.Rock}
        position={[3.07, 0.06, 1.9]}
        rotation={[0.11, 1.36, 0.19]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.Rock}
        position={[2.27, -0.13, 2.4]}
        rotation={[-0.11, 0.54, -0.22]}
        scale={0.5}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.Rock}
        position={[-3.46, 0.13, 2.84]}
        rotation={[0.01, -0.47, -0.13]}
        scale={0.89}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials.Rock}
        position={[3.36, 0.12, -2.61]}
        rotation={[0.18, 1.36, -0.38]}
        scale={0.36}
        castShadow={true}
        receiveShadow={true}
      />
    </group>
  );
}

function Camp_map() {
  return (
    <>
      {/* 카메라, 빛 */}
      <CameraAndLight />
      {/* Base Grass와 Flowers */}
      <BaseGrassAndFlowers />
      {/* Base Grass와 Flowers를 제외한 나머지 objects */}
      <Model />
      {/* 방명록 */}
      <GuestBookModel />
    </>
  );
}

export default Camp_map;
