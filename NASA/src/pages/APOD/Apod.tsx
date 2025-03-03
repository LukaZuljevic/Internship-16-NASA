import { useEffect, useState } from "react";
import "./APOD.css";
import { fetchApodPicture } from "../../services/Apod";
import { ApodPicture } from "../../types";

export const Apod = () => {
  const [data, setData] = useState<ApodPicture[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const datas = await fetchApodPicture();

      setData(datas);
    };
    fetch();
  }, []);

  return <h1>ff</h1>;
};
