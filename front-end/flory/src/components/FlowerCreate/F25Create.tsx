/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f25.glb -t
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";
import { useLocation } from "react-router-dom";
import { useFrame, useThree } from "@react-three/fiber";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { positionUpdate } from "../../redux/modules/diary/diary-slice";
import { createFlowerPosition } from "../../redux/modules/diaryCreate/diaryCreate-slice";

type GLTFResult = GLTF & {
  nodes: {
    f25_1: THREE.Mesh;
    f25_2: THREE.Mesh;
  };
  materials: {
    stem: THREE.MeshStandardMaterial;
    ["flower.001"]: THREE.MeshStandardMaterial;
  };
};

export function F25Create(
  props: (JSX.IntrinsicElements["group"] & PositionType) | any
) {
  const x = useAppSelector((state) => state.diaryCreate.diaryCreateData.x);
  const y = useAppSelector((state) => state.diaryCreate.diaryCreateData.y);
  const z = useAppSelector((state) => state.diaryCreate.diaryCreateData.z);
  const location = useLocation();
  const modelRef = useRef<any>();
  const groupRef = useRef<any>();
  const [position, setPosition] = useState({ x, y, z });
  const [isDragging, setIsDragging] = useState(false);

  const { scene, camera } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  const dispatch = useAppDispatch();
  const handlePositionUpdate = (position: any) => {
    dispatch(createFlowerPosition(position));
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
    if (location.pathname.includes("garden/edit")) {
      handlePositionUpdate(position);
      window.addEventListener("click", handleWindowClick);
    }
    return () => {
      if (location.pathname.includes("garden/edit")) {
        window.removeEventListener("click", handleWindowClick);
      }
    };
  }, [isDragging, location.pathname]);

  useFrame(({ mouse }) => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }

    if (location.pathname.includes("garden/edit")) {
      if (isDragging) {
        const found = intersect(mouse);
        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue;

            // 물체가 마우스와 만난 지점으로 위치를 업데이트합니다.
            const newPosition = found[i].point;
            setPosition({ x: newPosition.x, y: y, z: newPosition.z });
          }
        }
      }
    }
  });

  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/flowers/f25.glb`
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[position.x, position.y, position.z]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? groupRef : modelRef}
        userData={{ draggable: true, name: "f25" }}
        onClick={() => {
          setIsDragging(!isDragging);
        }}
      >
        <mesh geometry={nodes.f25_1.geometry} material={materials.stem} />
        <mesh
          geometry={nodes.f25_2.geometry}
          material={materials["flower.001"]}
        />
      </group>
    </group>
  );
}

export default F25Create;
