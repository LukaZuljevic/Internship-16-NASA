import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApodPicture } from "../../services/ApodApi";
import { ApodPicture } from "../../types";
import "./ApodDetails.css";

export const ApodDetails = () => {
  const { date } = useParams<{ date: string }>();
  const [data, setData] = useState<ApodPicture | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchApodPicture({
          startDate: date,
          endDate: date,
        });

        if (fetchedData) setData(fetchedData[0]);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [date]);

  return (
    <section id="apod-details">
      <div className="apod-image">
        <img src={data?.url} alt={data?.title} />
      </div>
      <div className="apod-info">
        <h1>{data?.title}</h1>
        <p className="apod-date">{data?.date}</p>
        <p className="apod-description">{data?.explanation}</p>
      </div>
    </section>
  );
};
