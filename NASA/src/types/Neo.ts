export type Neo = {
  id: number;
  name: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      esitmated_diameter_min: number;
      esitmated_diameter_max: number;
    };
    meters: {
      esitmated_diameter_min: number;
      esitmated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [
    {
      close_approach_date: string;
      close_approach_date_full: string;
      epoch_date_close_approach: number;
      relative_velocity: {
        kilometers_per_second: string;
        kilometers_per_hour: string;
      };
      miss_distance: {
        kilometers: string;
      };
      orbiting_body: string;
    }
  ];
};
