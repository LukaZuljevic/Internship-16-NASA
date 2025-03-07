import * as THREE from "three";
import { Neo } from "../types";
import { Material } from "three";

export const createScene = (isDarkMode: boolean) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(isDarkMode ? 0x111111 : 0xffffff);
  return scene;
};

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 15);
  camera.lookAt(0, 0, 0);
  return camera;
};

export const createRenderer = (container: HTMLDivElement) => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  return renderer;
};

export const createLight = () => {
  const light = new THREE.PointLight(0xffffff, 100, 100);
  light.position.set(5, 5, 5);
  return light;
};

export const createNeo = (neoData: Neo, isDarkMode: boolean) => {
  const geometry = new THREE.SphereGeometry(
    neoData.estimated_diameter.kilometers.estimated_diameter_max * 3,
    100,
    100
  );
  const material = new THREE.MeshStandardMaterial({
    color: isDarkMode ? 0xaaaaaa : 0x808080,
  });
  return new THREE.Mesh(geometry, material);
};

export const createCenterBody = (isEarth: boolean, isDarkMode: boolean) => {
  const geometry = new THREE.SphereGeometry(isEarth ? 1 : 3, 50, 50);
  const material = new THREE.MeshStandardMaterial({
    color: isEarth
      ? isDarkMode
        ? 0x4444ff
        : 0x0000ff
      : isDarkMode
      ? 0xffdd44
      : 0xffff00,
  });
  return new THREE.Mesh(geometry, material);
};

export const createOrbitPath = (neoData: Neo, isDarkMode: boolean) => {
  const isEarth = neoData.close_approach_data[0].orbiting_body === "Earth";
  const orbitRadius = isEarth ? 8 : 10;
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({
    color: isDarkMode ? 0x666666 : 0x808080,
  });

  const orbitPoints = [];
  for (let i = 0; i <= 300; i++) {
    const th = (i / 300) * Math.PI * 2;
    orbitPoints.push(
      new THREE.Vector3(
        Math.cos(th) * orbitRadius,
        0,
        Math.sin(th) * orbitRadius
      )
    );
  }
  geometry.setFromPoints(orbitPoints);
  return new THREE.Line(geometry, material);
};
export const clearScene = (obj: any) => {
  while (obj.children.length > 0) {
    clearScene(obj.children[0]);
    obj.remove(obj.children[0]);
  }

  if (obj.geometry) obj.geometry.dispose();

  if (obj.material) {
    if (Array.isArray(obj.material)) {
      obj.material.forEach((m: Material) => m.dispose());
    } else {
      obj.material.dispose();
    }
  }
};
