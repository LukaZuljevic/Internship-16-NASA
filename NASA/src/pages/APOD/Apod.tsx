import { fetchApodPicture } from "../../services/ApodApi";
import { ApodPicture } from "../../types";
import { ApodList } from "../../components/ApodList";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { getDateRange } from "../../utils";
import "./Apod.css";

export const Apod = () => {
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
