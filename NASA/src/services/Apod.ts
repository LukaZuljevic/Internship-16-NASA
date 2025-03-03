import { ApodPicture } from "../types";

export const fetchApodPicture = async (): Promise<ApodPicture[]> => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=fhrfI3fyPa0wyLZcBLOwgeY5EznpxrPjAQeBIjZf&start_date=2025-02-10`
    );

    const data = response.json();

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
