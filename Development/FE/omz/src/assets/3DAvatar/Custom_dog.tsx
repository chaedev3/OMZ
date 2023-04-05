/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 custom_rabbit.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh;
    body_2: THREE.Mesh;
    tail: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube007_3: THREE.Mesh;
    Cube007_4: THREE.Mesh;
    alien_glasses: THREE.Mesh;
    angel_hat: THREE.Mesh;
    angel_wing: THREE.Mesh;
    arab_object: THREE.Mesh;
    arab_object_1: THREE.Mesh;
    balloon_object: THREE.Mesh;
    balloon_object_1: THREE.Mesh;
    bat_object: THREE.Mesh;
    bat_object_1: THREE.Mesh;
    circle_glasses: THREE.Mesh;
    heart_glasses: THREE.Mesh;
    magic_object: THREE.Mesh;
    magic_object_1: THREE.Mesh;
    santa_object: THREE.Mesh;
    santa_object_1: THREE.Mesh;
    star_glasses: THREE.Mesh;
    vampire_object: THREE.Mesh;
    vampire_object_1: THREE.Mesh;
    dog_gum: THREE.Mesh;
    my_glasses: THREE.Mesh;
    white_cap: THREE.Mesh;
  };
  materials: {
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    alien_material: THREE.MeshStandardMaterial;
    angel_hat_material: THREE.MeshStandardMaterial;
    angel_wing_material: THREE.MeshStandardMaterial;
    arab_material_1: THREE.MeshStandardMaterial;
    arab_material_2: THREE.MeshStandardMaterial;
    balloon_material_1: THREE.MeshStandardMaterial;
    balloon_material_2: THREE.MeshStandardMaterial;
    bat_object_1: THREE.MeshStandardMaterial;
    bat_object_2: THREE.MeshStandardMaterial;
    circle_glasses_material: THREE.MeshStandardMaterial;
    heart_glasses_material: THREE.MeshStandardMaterial;
    magic_material_1: THREE.MeshStandardMaterial;
    magic_material_2: THREE.MeshStandardMaterial;
    santa_material_1: THREE.MeshStandardMaterial;
    santa_materail_2: THREE.MeshStandardMaterial;
    star_material: THREE.MeshStandardMaterial;
    vampire_material1: THREE.MeshStandardMaterial;
    vampire_material2: THREE.MeshStandardMaterial;
    dog_gum_material: THREE.MeshStandardMaterial;
    mymaterial: THREE.MeshStandardMaterial;
    white_material: THREE.MeshStandardMaterial;
  };
};
interface Item {
  [key: string]: number;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function Custom_dog({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF("/3D/custom_dog.glb") as GLTFResult;

  // 안경 custom
  const selectGlasses = () => {
    switch (itemStatus?.glasses) {
      case 1:
        // 하트 안경
        return (
          <>
            <mesh
              geometry={nodes.heart_glasses.geometry}
              material={materials.heart_glasses_material}
              position={[-0.54, 2.71, 0.51]}
              rotation={[-0.02, -0.87, -0.03]}
              scale={0.25}
            />
          </>
        );
      case 2:
        // 별 안경
        return (
          <>
            <mesh
              geometry={nodes.star_glasses.geometry}
              material={materials.star_material}
              position={[-0.47, 2.66, 0.46]}
              rotation={[-3.09, -0.7, -3.04]}
              scale={0.31}
            />
          </>
        );
      case 3:
        // alien 안경
        return (
          <>
            <mesh
              geometry={nodes.alien_glasses.geometry}
              material={materials.alien_material}
              position={[-0.35, 2.79, 0.3]}
              rotation={[-3.14, -0.73, -3.14]}
              scale={0.38}
            />
          </>
        );
      case 4:
        // 동그란 안경
        return (
          <>
            <mesh
              geometry={nodes.circle_glasses.geometry}
              material={materials.circle_glasses_material}
              position={[-0.47, 2.6, 0.42]}
              rotation={[-3.11, -0.72, -3.06]}
              scale={0.3}
            />
          </>
        );
      case 5:
        // 마이안경
        return (
          <>
            <mesh
              geometry={nodes.my_glasses.geometry}
              material={materials.mymaterial}
              position={[-0.4, 2.64, 0.32]}
              rotation={[-3.13, -0.77, -3.12]}
              scale={0.31}
            />
          </>
        );
    }
  };
  // 모자 custom
  const selectHat = () => {
    switch (itemStatus?.hat) {
      case 1:
        // 천사 링
        return (
          <>
            <mesh
              geometry={nodes.angel_hat.geometry}
              material={materials.angel_hat_material}
              position={[-0.33, 3.46, 0.81]}
              rotation={[-1.55, -0.02, 0.48]}
              scale={0.36}
            />
          </>
        );
      case 2:
        // 아랍 모자
        return (
          <>
            <group
              position={[0.15, 1.71, -0.16]}
              rotation={[0.01, -0.66, -0.01]}
              scale={2.02}
            >
              <mesh
                geometry={nodes.arab_object.geometry}
                material={materials.arab_material_1}
              />
              <mesh
                geometry={nodes.arab_object_1.geometry}
                material={materials.arab_material_2}
              />
            </group>
          </>
        );
      case 3:
        // 마법 모자
        return (
          <>
            <group position={[-0.02, 3.5, 0.04]} scale={[0.72, 0.4, 0.72]}>
              <mesh
                geometry={nodes.magic_object.geometry}
                material={materials.magic_material_1}
              />
              <mesh
                geometry={nodes.magic_object_1.geometry}
                material={materials.magic_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 산타 모자
        return (
          <>
            <group
              position={[0.02, 3.06, -0.02]}
              rotation={[-1.58, 0.01, -2.43]}
              scale={[0.77, 0.77, 0.76]}
            >
              <mesh
                geometry={nodes.santa_object.geometry}
                material={materials.santa_material_1}
              />
              <mesh
                geometry={nodes.santa_object_1.geometry}
                material={materials.santa_materail_2}
              />
            </group>
          </>
        );
      case 5:
        // 털 모자
        return (
          <>
            <mesh
              geometry={nodes.white_cap.geometry}
              material={materials.white_material}
              position={[0.15, 3.05, -0.09]}
              rotation={[-1.72, 0.21, -0.83]}
              scale={0.83}
            />
          </>
        );
    }
  };
  // 날개 custom
  const selectWing = () => {
    switch (itemStatus?.wing) {
      case 1:
        // 천사 날개
        return (
          <>
            <mesh
              geometry={nodes.angel_wing.geometry}
              material={materials.angel_wing_material}
              position={[-0.35, 1.55, -0.66]}
              rotation={[2.96, 0.78, -3.01]}
              scale={0.16}
            />
          </>
        );
      case 2:
        // 박쥐 날개
        return (
          <>
            <group
              position={[0.47, 1.08, -0.4]}
              rotation={[-1.36, -0.21, -0.81]}
              scale={0.44}
            >
              <mesh
                geometry={nodes.bat_object.geometry}
                material={materials.bat_object_1}
              />
              <mesh
                geometry={nodes.bat_object_1.geometry}
                material={materials.bat_object_2}
              />
            </group>
          </>
        );
      case 3:
        // 풍선
        return (
          <>
            <group
              position={[-0.76, 1.79, 0.71]}
              rotation={[0.23, -0.02, -0.15]}
              scale={-0.06}
            >
              <mesh
                geometry={nodes.balloon_object.geometry}
                material={materials.balloon_material_1}
              />
              <mesh
                geometry={nodes.balloon_object_1.geometry}
                material={materials.balloon_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 뱀파이어 망토
        return (
          <>
            <group
              position={[0.09, 2.52, -0.09]}
              rotation={[0, -0.8, 0]}
              scale={1.5}
            >
              <mesh
                geometry={nodes.vampire_object.geometry}
                material={materials.vampire_material1}
              />
              <mesh
                geometry={nodes.vampire_object_1.geometry}
                material={materials.vampire_material2}
              />
            </group>
          </>
        );
      case 5:
        // 랜덤(개껌)
        return (
          <>
            <mesh
              geometry={nodes.dog_gum.geometry}
              material={materials.dog_gum_material}
              position={[0.64, 1.66, 0.86]}
              rotation={[-0.4, 0.06, 0.67]}
              scale={-2.55}
            />
          </>
        );
    }
  };
  const props: any = { position };
  return (
    <group {...props} dispose={null} scale={1.2}>
      {selectGlasses()}
      {selectHat()}
      {selectWing()}
      <mesh
        geometry={nodes.Body.geometry}
        material={materials["Material.009"]}
        position={[0.04, 1.36, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.62, 0.67, 0.61]}
      />
      <mesh
        geometry={nodes.body_2.geometry}
        material={materials["Material.008"]}
        position={[0.01, 1.36, 0.04]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.56, 0.6, 0.55]}
      />
      <mesh
        geometry={nodes.tail.geometry}
        material={materials["Material.008"]}
        position={[0.45, 1.31, -0.4]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.22}
      />
      <group
        position={[-0.03, 2.63, 0.04]}
        rotation={[0, -0.86, 0.01]}
        scale={[1.12, 1.22, 1.06]}
      >
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube007_3.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Cube007_4.geometry}
          material={materials["Material.016"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D/custom_dog.glb");
