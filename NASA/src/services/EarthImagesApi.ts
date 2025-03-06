import { EarthImage } from "../types";
import { NASA_API, EARTH_IMAGES_PATH } from "../constants";
import { LatLngExpression } from "leaflet";

const API_KEY = import.meta.env.VITE_API_KEY;

type fetchEarthImagesProps = {
  position: LatLngExpression | null;
};

export const fetchEarthImages = async ({
  position,
}: fetchEarthImagesProps): Promise<EarthImage> => {
  let lat: number;
  let lon: number;

  if (!position) throw new Error("Position is required");

  if (Array.isArray(position)) {
    lat = position[0];
    lon = position[1];
  } else {
    lat = position.lat;
    lon = position.lng;
  }

  const queryParams: string = `lon=${lon}&lat=${lat}&date=2025-01-01&dim=0.2&api_key=${API_KEY}`;

  const response = await fetch(
    `${NASA_API}${EARTH_IMAGES_PATH}?${queryParams}`
  );

  console.log(response);

  if (response.status === 404) {
    return {
      date: "",
      id: "",
      url: "src/assets/fallbackImage.png",
    };
  }

  const data = await response.json();

  return data;
};
