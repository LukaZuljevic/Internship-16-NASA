import "./APOD.css";
import { fetchApodPicture } from "../../services/Apod";
import { ApodPicture } from "../../types";
import { ApodList } from "../../components/ApodList";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";

const PicturesAndLoad = fetchDataWithLoad<
  ApodPicture[],
  { data: ApodPicture[] }
>(ApodList, fetchApodPicture);

export const Apod = () => {
  return (
    <section id="apod-page">
      <PicturesAndLoad />
    </section>
  );
};
