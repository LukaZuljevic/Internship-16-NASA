import "./NeoOrbit.css";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { Neo } from "../../types";
import { useNeoOrbitAnimation } from "../../hooks";

export const NeoOrbit = () => {
  const location = useLocation();
  const neoData: Neo | null = location.state;
  const animationRef = useRef<HTMLDivElement>(null);

  useNeoOrbitAnimation({ neoData, animationRef });

  return <div ref={animationRef} className="orbit-page"></div>;
};
