import { MarsPhoto } from "../types";
import { NASA_API, MARS_ROVER_PATH } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

type fetchMarsPhotosProps = {
  page: number;
  rover: string;
  camera?: string;
  earthDate: string;
};

export const fetchMarsPhotos = async ({
  page,
  rover,
  camera,
  earthDate,
}: fetchMarsPhotosProps): Promise<MarsPhoto[]> => {
  const queryParams: string = `page=${page}${
    camera ? `&camera=${camera}` : ""
  }&earth_date=${earthDate}&api_key=${API_KEY}`;

  const response = await fetch(
    `${NASA_API}${MARS_ROVER_PATH}/${rover}/photos?${queryParams}`
  );

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`${response.status} , ${errorDetails}`);
  }
  const data = await response.json();

  return data.photos.map((item: MarsPhoto) => ({
    id: item.id,
    sol: item.sol,
    camera: {
      id: item.camera.id,
      name: item.camera.name,
      rover_id: item.camera.rover_id,
      full_name: item.camera.full_name,
    },
    img_src: item.img_src,
    earth_date: item.earth_date,
    rover: {
      id: item.rover.id,
      name: item.rover.name,
    },
  }));
};
