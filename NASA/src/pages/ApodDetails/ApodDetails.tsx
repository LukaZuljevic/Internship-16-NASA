import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApodPicture } from "../../types";
import "./ApodDetails.css";
import { useFetchApodPicture } from "../../hooks";
import { fallBackImage } from "../../constants";

export const ApodDetails = () => {
  const { date } = useParams<{ date: string }>();
  const [data, setData] = useState<ApodPicture | null>(null);
  const { fetchData } = useFetchApodPicture({ date, setData });

  useEffect(() => {
    fetchData();
  }, [date]);

  return (
    <section id="apod-details-page">
      <div className="apod-details-container">
        <h1 className="apod-title">{data?.title}</h1>
        <img
          src={data?.url || fallBackImage}
          alt={data?.title}
          className="apod-image"
        />

        <div className="apod-info">
          <p className="apod-date">{data?.date}</p>
          <p className="apod-description">{data?.explanation}</p>
        </div>
      </div>
    </section>
  );
};
