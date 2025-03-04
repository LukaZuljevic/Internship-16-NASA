import { ApodPicture } from "../types";
import { NASA_API, APOD_PATH } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

type fetchApodPictureProps = {
  startDate: string | null;
  endDate: string | null;
};

export const fetchApodPicture = async ({
  startDate,
  endDate,
}: fetchApodPictureProps): Promise<ApodPicture[]> => {
  try {
    const queryParams = `api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

    const response = await fetch(`${NASA_API}${APOD_PATH}?${queryParams}`);

    if (!response.ok) throw new Error(`${response.status}`);

    const data = await response.json();

    return data
      .map((item: ApodPicture) => ({
        date: item.date,
        explanation: item.explanation,
        media_type: item.media_type,
        title: item.title,
        url: item.url,
      }))
      .reverse();
  } catch (error) {
    console.log("Error", error);
    return [];
  }
};
