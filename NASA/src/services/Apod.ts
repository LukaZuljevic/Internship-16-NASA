import { ApodPicture } from "../types";

type fetchApodPictureProps = {
  today: string;
  pastDate: string;
};

export const fetchApodPicture = async ({
  today,
  pastDate,
}: fetchApodPictureProps): Promise<ApodPicture[]> => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=fhrfI3fyPa0wyLZcBLOwgeY5EznpxrPjAQeBIjZf&start_date=${pastDate}&end_date=${today}`
    );

    const data = response.json();

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
