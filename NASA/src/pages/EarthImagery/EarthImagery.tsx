import "./EarthImagery.css";
import { Map } from "../../components/Map";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { EarthImage } from "../../types";
import { EarthImages } from "../../components/EarthImages";
import { fetchEarthImages } from "../../services/EarthImagesApi";

export const EarthImagery = () => {
  const [position, setPosition] = useState<LatLngExpression | null>([45, 15]);

  const EarthImageWithLoading = fetchDataWithLoad<
    EarthImage,
    {
      data: EarthImage;
    }
  >(EarthImages, () => fetchEarthImages({ position }));

  console.log(position);

  return (
    <section id="earth-imagery">
      <Map position={position} setPosition={setPosition} />
      <EarthImageWithLoading />
    </section>
  );
};
