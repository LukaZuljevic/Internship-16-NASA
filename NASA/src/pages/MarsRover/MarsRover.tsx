import { MarsPhoto } from "../../types";
import { MarsPhotos } from "../../components/Mars/MarsPhotos";
import { fetchMarsPhotos } from "../../services/MarsPhotosApi";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { useEffect, useState } from "react";
import { MarsPhotosFilter } from "../../components/Mars/MarsPhotosFilter";
import "./MarsRover.css";

export const MarsRover = () => {
  const [page, setPage] = useState<number>(1);
  const [rover, setRover] = useState<string>("curiosity");
  const [camera, setCamera] = useState<string>("");
  const [earthDate, setEarthDate] = useState<string>("2023-02-02");

  const MarsPhotosWithLoad = fetchDataWithLoad<
    MarsPhoto[],
    { data: MarsPhoto[] }
  >(MarsPhotos, () => fetchMarsPhotos({ page, rover, camera, earthDate }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="mars-rovers-photos-page">
      <MarsPhotosFilter
        setPage={setPage}
        setRover={setRover}
        setCamera={setCamera}
        setEarthDate={setEarthDate}
        earthDate={earthDate}
        rover={rover}
        page={page}
        camera={camera}
      />
      <MarsPhotosWithLoad />
    </section>
  );
};
