import { Neo } from "../types";
import { NASA_API, NEO_PATH } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

type NeoApiProps = {
  startDate: string | null;
};

export const fetchNeo = async ({ startDate }: NeoApiProps): Promise<Neo[]> => {
  const queryParams = `start_date=${startDate}&api_key=${API_KEY}`;

  const response = await fetch(`${NASA_API}${NEO_PATH}?${queryParams}`);

  if (!response.ok)
    throw new Error(`API error: ${response.status} ${response.statusText}`);

  const data = await response.json();

  return data.near_earth_objects[startDate as string].map((item: Neo) => ({
    id: item.id,
    name: item.name,
    absolute_magnitude_h: item.absolute_magnitude_h,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min:
          item.estimated_diameter.kilometers.estimated_diameter_min,
        estimated_diameter_max:
          item.estimated_diameter.kilometers.estimated_diameter_max,
      },
      meters: {
        estimated_diameter_min:
          item.estimated_diameter.meters.estimated_diameter_min,
        estimated_diameter_max:
          item.estimated_diameter.meters.estimated_diameter_max,
      },
    },
    is_potentially_hazardous_asteroid: item.is_potentially_hazardous_asteroid,

    close_approach_data: item.close_approach_data.map((approach) => ({
      close_approach_date: approach.close_approach_date,
      relative_velocity: {
        kilometers_per_hour: approach.relative_velocity.kilometers_per_hour,
      },
      miss_distance: {
        kilometers: approach.miss_distance.kilometers,
      },
    })),
  }));
};
