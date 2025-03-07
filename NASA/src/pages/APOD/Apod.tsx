import { fetchApodPicture } from "../../services/ApodApi";
import { ApodPicture } from "../../types";
import { ApodList } from "../../components/ApodList";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { getDateRange } from "../../utils";
import "./Apod.css";
import { useEffect } from "react";

export const Apod = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="apod-page">
      <PicturesWithLoad />
    </section>
  );
};

const { today, startDate } = getDateRange(20);

const PicturesWithLoad = fetchDataWithLoad<
  ApodPicture[],
  { data: ApodPicture[] }
>(ApodList, () =>
  fetchApodPicture({
    startDate,
    endDate: today,
  })
);
