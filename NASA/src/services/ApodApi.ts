import { ApodPicture } from "../types";

const NASA_API = "https://api.nasa.gov";

type fetchApodPictureProps = {
  startDate: string | null;
  endDate: string | null;
};

export const fetchApodPicture = async ({
  startDate,
  endDate,
}: fetchApodPictureProps): Promise<ApodPicture[]> => {
  try {
    const response = await fetch(
      `${NASA_API}/planetary/apod?api_key=fhrfI3fyPa0wyLZcBLOwgeY5EznpxrPjAQeBIjZf&start_date=${startDate}&end_date=${endDate}`
    );

    if (!response.ok) throw new Error(`${response.status}`);

    const data = await response.json();

    console.log(data);

    return data.reverse();
  } catch (err) {
    console.log(err);
    return [];
  }
};
