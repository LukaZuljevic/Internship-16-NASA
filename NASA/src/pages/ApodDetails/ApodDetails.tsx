import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApodPicture } from "../../services/ApodApi";
import { ApodPicture } from "../../types";
import "./ApodDetails.css";

export const ApodDetails = () => {
  const { date } = useParams<{ date?: string }>();
  const [data, setData] = useState<ApodPicture | null>(null);

  if (!date) return <p>Error: No date provided</p>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchApodPicture({
          startDate: date,
          endDate: date,
        });

        if (fetchedData) setData(fetchedData[0]);
      } catch (error) {
        console.error("Error fetching APOD data", error);
      }
    };

    fetchData();
  }, [date]);

  return (
    <div className="apod-details-container">
      <h1 className="apod-title">{data?.title}</h1>
      <img src={data?.url} alt={data?.title} className="apod-image" />

      <div className="apod-info">
        <p className="apod-date">{data?.date}</p>
        <p className="apod-description">{data?.explanation}</p>
      </div>
    </div>
  );
};
