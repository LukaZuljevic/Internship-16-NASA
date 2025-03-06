import {
  createScene,
  createCamera,
  createCenterBody,
  createLight,
  createNeo,
  createOrbitPath,
  createRenderer,
  clearScene,
} from "../utils/orbitAnimationHelpers";
import { Neo } from "../types";
import { RefObject, useEffect } from "react";
import {
  BufferGeometry,
  Camera,
  Light,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshStandardMaterial,
  NormalBufferAttributes,
  Object3DEventMap,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

type useNeoOrbitAnimationProps = {
  neoData: Neo | null;
  animationRef: RefObject<HTMLDivElement | null>;
};

export const useNeoOrbitAnimation = ({
  neoData,
  animationRef,
}: useNeoOrbitAnimationProps) => {
  const isEarth = neoData?.close_approach_data[0].orbiting_body === "Earth";

  useEffect(() => {
    if (!neoData || !animationRef.current) return;

    const scene: Scene = createScene();
    const camera: Camera = createCamera();
    const renderer: WebGLRenderer = createRenderer(animationRef.current);
    const light: Light = createLight();
    scene.add(light);

    const neo: Mesh<SphereGeometry, MeshStandardMaterial, Object3DEventMap> =
      createNeo(neoData);
    scene.add(neo);

    const centerBody: Mesh<
      SphereGeometry,
      MeshStandardMaterial,
      Object3DEventMap
    > = createCenterBody(isEarth);
    scene.add(centerBody);

    const orbitPath: Line<
      BufferGeometry<NormalBufferAttributes>,
      LineBasicMaterial,
      Object3DEventMap
    > = createOrbitPath(neoData);
    scene.add(orbitPath);

    let angle = 0;
    const speed =
      parseFloat(
        neoData.close_approach_data[0].relative_velocity.kilometers_per_hour
      ) / 50000000;

    const animate = () => {
      angle += speed;
      neo.position.x = Math.cos(angle) * (isEarth ? 8 : 10);
      neo.position.z = Math.sin(angle) * (isEarth ? 8 : 10);
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      clearScene(scene);

      renderer.setAnimationLoop(null);
      renderer.dispose();
    };
  }, []);
};
